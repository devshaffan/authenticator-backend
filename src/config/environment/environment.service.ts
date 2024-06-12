import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EnvironmentType } from 'src/common/definitions/enums';
import { IEnvironment } from 'src/common/interfaces/iconfig/environment.interface';

@Injectable()
export class EnvironmentService implements IEnvironment {
  constructor(private configService: ConfigService) {}

  getEnvironmentType(): EnvironmentType {
    return this.configService.get<EnvironmentType>('NODE_ENV');
  }

  getDatabaseType(): any {
    return this.configService.get<string>('DATABASE_TYPE');
  }

  getUrl(): string {
    return this.configService.get<string>('URL');
  }

  getSync(): boolean {
    return this.configService.get<boolean>('SYNC');
  }

  getLogging(): boolean {
    return this.configService.get<boolean>('LOGGING');
  }

  getJwtSecret(): string {
    return this.configService.get<string>('JWT_SECRET');
  }

  getJwtExpiryTime(): number {
    return this.configService.get<number>('JWT_EXPIRY_TIME');
  }
}
