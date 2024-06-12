import { IJwtPayload } from 'src/common/adapter/passport-jwt/jwt-payload.interface';
import { SignInModel, SignUpModel } from 'src/common/models/auth.model';
export interface IAuthService {
    signUp(signUpModel: SignUpModel): Promise<any>;
    signIn(signInModel: SignInModel): Promise<any>;
    validate(payload: IJwtPayload): Promise<any>;
}
