export class UserModel {
  name: string;
  email: string;
  password: string;
}

export class CreateUserModel extends UserModel {}

export class UpdateUserModel extends UserModel {}
