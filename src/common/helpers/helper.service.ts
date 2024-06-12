import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HelperService {
  constructor() {}

  async getPasswordHashed(password: string): Promise<string> {
    const saltRounds = 10;
    const hashedPassword: string = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  }
}
