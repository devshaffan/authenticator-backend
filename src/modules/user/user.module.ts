import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRepository } from 'src/common/repositories/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/common/entities/user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    {
      provide: 'IUserService',
      useClass: UserService,
    },
    {
      provide: 'IUserRepository',
      useClass: UserRepository,
    },
  ],
  exports: ['IUserService'],
})
export class UserModule {}
