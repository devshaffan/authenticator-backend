import { UserModel } from './user.model';
export declare class SignUpModel extends UserModel {
}
declare const SignInModel_base: import("@nestjs/common").Type<Omit<UserModel, "name">>;
export declare class SignInModel extends SignInModel_base {
}
export {};
