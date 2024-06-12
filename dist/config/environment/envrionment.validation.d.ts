import { DatabaseType, EnvironmentType } from 'src/common/definitions/enums';
declare class EnvironmentVariables {
    NODE_ENV: EnvironmentType;
    DATABASE_TYPE: DatabaseType;
    SYNC: boolean;
    DATABASE_LOGGING: boolean;
    URL: string;
    JWT_SECRET: string;
    JWT_EXPIRY_TIME: number;
}
export declare function validateEnvironment(config: Record<string, unknown>): EnvironmentVariables;
export {};
