import { ConfigService } from '@nestjs/config';
import { EnvironmentType } from 'src/common/definitions/enums';
import { IEnvironment } from 'src/common/interfaces/iconfig/environment.interface';
export declare class EnvironmentService implements IEnvironment {
    private configService;
    constructor(configService: ConfigService);
    getEnvironmentType(): EnvironmentType;
    getDatabaseType(): any;
    getUrl(): string;
    getSync(): boolean;
    getLogging(): boolean;
    getJwtSecret(): string;
    getJwtExpiryTime(): number;
}
