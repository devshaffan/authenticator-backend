import { IAuthService } from 'src/common/interfaces/iservices/auth.service.interface';
import { SignInModel, SignUpModel } from 'src/common/models/auth.model';
import { HelperService } from 'src/common/helpers/helper.service';
import { IUserService } from 'src/common/interfaces/iservices/user.service.interface';
import { User } from 'src/common/entities/user/user.entity';
import { IJwtPayload } from 'src/common/adapter/passport-jwt/jwt-payload.interface';
import { EnvironmentService } from 'src/config/environment/environment.service';
export declare class AuthService implements IAuthService {
    private readonly userService;
    private readonly environmentService;
    private readonly helperService;
    private readonly logger;
    private readonly jwtService;
    constructor(userService: IUserService, environmentService: EnvironmentService, helperService: HelperService);
    private generateAccessToken;
    private findUserByEmail;
    signIn(signInModel: SignInModel): Promise<any>;
    signUp(signUpModel: SignUpModel): Promise<any>;
    validate(payload: IJwtPayload): Promise<User>;
}
