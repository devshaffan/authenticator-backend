export declare class UserDto {
    email: string;
    name: string;
    password: string;
}
export declare class CreateUserDto extends UserDto {
}
export declare class UpdateUserDto extends UserDto {
    id: number;
}
