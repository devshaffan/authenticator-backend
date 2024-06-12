/* eslint-disable prettier/prettier */
import { Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { EnvironmentService } from 'src/config/environment/environment.service';
import { AuthModule } from 'src/modules/auth/auth.module';

@Global()
@Module({
  imports: [
    AuthModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      inject: [EnvironmentService],
      useFactory: (configService: EnvironmentService) => ({
        secret: configService.getJwtSecret(),
        expiresIn: configService.getJwtExpiryTime() + 's',
      }),
    }),
  ],
  providers: [JwtStrategy],
  exports: [PassportModule, JwtModule, JwtStrategy],
})
export class PassportJwtModule {}
