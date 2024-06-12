"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassportJwtModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const jwt_strategy_1 = require("./jwt.strategy");
const environment_service_1 = require("../../../config/environment/environment.service");
const auth_module_1 = require("../../../modules/auth/auth.module");
let PassportJwtModule = class PassportJwtModule {
};
exports.PassportJwtModule = PassportJwtModule;
exports.PassportJwtModule = PassportJwtModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.registerAsync({
                inject: [environment_service_1.EnvironmentService],
                useFactory: (configService) => ({
                    secret: configService.getJwtSecret(),
                    expiresIn: configService.getJwtExpiryTime() + 's',
                }),
            }),
        ],
        providers: [jwt_strategy_1.JwtStrategy],
        exports: [passport_1.PassportModule, jwt_1.JwtModule, jwt_strategy_1.JwtStrategy],
    })
], PassportJwtModule);
//# sourceMappingURL=passport-jwt.module.js.map