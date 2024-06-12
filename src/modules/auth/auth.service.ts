import {
  Inject,
  Injectable,
  Logger,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { IAuthService } from 'src/common/interfaces/iservices/auth.service.interface';
import { SignInModel, SignUpModel } from 'src/common/models/auth.model';
import { HelperService } from 'src/common/helpers/helper.service';
import { IUserService } from 'src/common/interfaces/iservices/user.service.interface';
import { FindOneOptions } from 'typeorm';
import { User } from 'src/common/entities/user/user.entity';
import { APP_MESSAGES } from 'src/common/definitions/constants';
import { IJwtPayload } from 'src/common/adapter/passport-jwt/jwt-payload.interface';
import * as bcrypt from 'bcrypt';
import { EnvironmentService } from 'src/config/environment/environment.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService implements IAuthService {
  private readonly logger = new Logger(AuthService.name);
  private readonly jwtService: JwtService;

  constructor(
    @Inject('IUserService') private readonly userService: IUserService,
    private readonly environmentService: EnvironmentService,
    private readonly helperService: HelperService,
  ) {
    this.jwtService = new JwtService();
  }

  private async generateAccessToken(email: string): Promise<string> {
    const payload: IJwtPayload = { email };
    const expiresIn = `${this.environmentService.getJwtExpiryTime()}s`;
    const secret = this.environmentService.getJwtSecret();
    return this.jwtService.sign(payload, { secret, expiresIn });
  }

  private async findUserByEmail(email: string): Promise<User> {
    const options: FindOneOptions<User> = { where: { email } };
    const user = await this.userService.getOne(options);
    if (!user) {
      this.logger.log(`User not found with email: ${email}`);
      throw new UnauthorizedException(APP_MESSAGES.AUTH.ERROR_UNAUTHORIZED);
    }
    return user;
  }

  async signIn(signInModel: SignInModel): Promise<any> {
    const { email, password } = signInModel;
    const user = await this.findUserByEmail(email);
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      this.logger.log(`Invalid password for user with email: ${email}`);
      throw new UnauthorizedException(APP_MESSAGES.AUTH.ERROR_UNAUTHORIZED);
    }

    const accessToken = await this.generateAccessToken(user.email);
    this.logger.log(`User login successful with email: ${email}`);

    return { name: user.name, email: user.email, accessToken };
  }

  async signUp(signUpModel: SignUpModel): Promise<any> {
    const { password } = signUpModel;
    const hashedPassword = await this.helperService.getPasswordHashed(password);

    const user = await this.userService.create({
      ...signUpModel,
      password: hashedPassword,
    });

    const accessToken = await this.generateAccessToken(user.email);

    return { name: user.name, email: user.email, accessToken };
  }

  async validate(payload: IJwtPayload): Promise<User> {
    const user = await this.findUserByEmail(payload.email);
    if (!user) {
      throw new NotFoundException(APP_MESSAGES.USER.ERROR_USER_NOT_FOUND);
    }
    return user;
  }
}
