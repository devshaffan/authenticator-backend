import { UserDto } from './user.dto';
import { OmitType } from '@nestjs/swagger';

export class SignUpDto extends UserDto {}

export class SignInDto extends OmitType(UserDto, ['name'] as const) {}
