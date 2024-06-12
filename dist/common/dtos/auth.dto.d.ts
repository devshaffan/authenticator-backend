import { UserDto } from './user.dto';
export declare class SignUpDto extends UserDto {
}
declare const SignInDto_base: import("@nestjs/common").Type<Omit<UserDto, "name">>;
export declare class SignInDto extends SignInDto_base {
}
export {};
