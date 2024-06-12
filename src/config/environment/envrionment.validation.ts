import { plainToClass } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  validateSync,
} from 'class-validator';
import { exit } from 'process';
import { DatabaseType, EnvironmentType } from 'src/common/definitions/enums';

class EnvironmentVariables {
  @IsNotEmpty()
  @IsEnum(EnvironmentType)
  NODE_ENV: EnvironmentType;

  @IsNotEmpty()
  @IsEnum(DatabaseType)
  DATABASE_TYPE: DatabaseType;

  @IsNotEmpty()
  @IsBoolean()
  SYNC: boolean;

  @IsNotEmpty()
  @IsBoolean()
  DATABASE_LOGGING: boolean;

  @IsNotEmpty()
  @IsString()
  URL: string;

  @IsNotEmpty()
  @IsString()
  JWT_SECRET: string;

  @IsNotEmpty()
  @IsNumber()
  JWT_EXPIRY_TIME: number;
}

export function validateEnvironment(config: Record<string, unknown>) {
  const validatedConfig = plainToClass(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    console.log(Error(errors.toString()));
    exit(1);
  }

  return validatedConfig;
}
