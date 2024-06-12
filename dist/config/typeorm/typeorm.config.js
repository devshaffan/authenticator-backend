"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmConfig = void 0;
const entities_1 = require("../../common/entities");
const environment_service_1 = require("../environment/environment.service");
const config_1 = require("@nestjs/config");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const environmentService = new environment_service_1.EnvironmentService(new config_1.ConfigService());
exports.TypeOrmConfig = (() => {
    return {
        type: environmentService.getDatabaseType(),
        synchronize: environmentService.getSync(),
        entities: entities_1.default,
        logging: environmentService.getLogging(),
        url: environmentService.getUrl(),
        useNewUrlParser: true,
    };
})();
//# sourceMappingURL=typeorm.config.js.map