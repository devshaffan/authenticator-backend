import { EnvironmentType } from 'src/common/definitions/enums';
export interface IEnvironment {
    getDatabaseType(): any;
    getUrl(): string;
    getSync(): boolean;
    getLogging(): boolean;
    getEnvironmentType(): EnvironmentType;
}
