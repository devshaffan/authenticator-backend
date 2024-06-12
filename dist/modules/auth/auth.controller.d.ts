import { SignInDto, SignUpDto } from 'src/common/dtos/auth.dto';
import { IAuthService } from 'src/common/interfaces/iservices/auth.service.interface';
export declare class AuthController {
    private authService;
    constructor(authService: IAuthService);
    signUp(signUpDto: SignUpDto): Promise<any>;
    signIn(signInDto: SignInDto): Promise<any>;
}
