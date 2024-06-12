import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ResponseMessageMetadata } from 'src/common/decorators/response-message.decorator';
import { APP_MESSAGES } from 'src/common/definitions/constants';
import { SignInDto, SignUpDto } from 'src/common/dtos/auth.dto';
import { IAuthService } from 'src/common/interfaces/iservices/auth.service.interface';

@Controller('auth')
export class AuthController {
  constructor(@Inject('IAuthService') private authService: IAuthService) {}

  @Post('sign_up')
  @ResponseMessageMetadata(APP_MESSAGES.USER.CREATED)
  async signUp(@Body() signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto);
  }

  @Post('sign_in')
  @ResponseMessageMetadata(APP_MESSAGES.AUTH.LOGGED_IN)
  async signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
  }
}
