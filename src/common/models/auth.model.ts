import { OmitType } from '@nestjs/swagger';
import { UserModel } from './user.model';

export class SignUpModel extends UserModel {}

export class SignInModel extends OmitType(UserModel, ['name'] as const) {}
