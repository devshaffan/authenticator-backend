import {
  IsNotEmpty,
  IsString,
  IsEmail,
  MaxLength,
  IsNumber,
  IsStrongPassword,
} from 'class-validator';
import { APP_MESSAGES } from '../definitions/constants';

export class UserDto {
  @IsNotEmpty()
  @IsEmail({}, { message: APP_MESSAGES.USER.ERROR_INVALID_EMAIL })
  @MaxLength(100)
  email: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsStrongPassword({
    minLength: 8,
    minUppercase: 1,
    minLowercase: 1,
  })
  password: string;
}

export class CreateUserDto extends UserDto {}

export class UpdateUserDto extends UserDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;
}
