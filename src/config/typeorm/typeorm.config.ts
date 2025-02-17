import { DataSourceOptions } from 'typeorm';
import entities from 'src/common/entities';
import { EnvironmentService } from '../environment/environment.service';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config();
const environmentService = new EnvironmentService(new ConfigService());

export const TypeOrmConfig: DataSourceOptions = (() => {
  return {
    type: environmentService.getDatabaseType(),
    synchronize: environmentService.getSync(),
    entities: entities,
    logging: environmentService.getLogging(),
    url: environmentService.getUrl(),
    useNewUrlParser: true,
  };
})();
