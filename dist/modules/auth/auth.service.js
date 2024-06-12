"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const helper_service_1 = require("../../common/helpers/helper.service");
const constants_1 = require("../../common/definitions/constants");
const bcrypt = require("bcrypt");
const environment_service_1 = require("../../config/environment/environment.service");
const jwt_1 = require("@nestjs/jwt");
let AuthService = AuthService_1 = class AuthService {
    constructor(userService, environmentService, helperService) {
        this.userService = userService;
        this.environmentService = environmentService;
        this.helperService = helperService;
        this.logger = new common_1.Logger(AuthService_1.name);
        this.jwtService = new jwt_1.JwtService();
    }
    async generateAccessToken(email) {
        const payload = { email };
        const expiresIn = `${this.environmentService.getJwtExpiryTime()}s`;
        const secret = this.environmentService.getJwtSecret();
        return this.jwtService.sign(payload, { secret, expiresIn });
    }
    async findUserByEmail(email) {
        const options = { where: { email } };
        const user = await this.userService.getOne(options);
        if (!user) {
            this.logger.log(`User not found with email: ${email}`);
            throw new common_1.UnauthorizedException(constants_1.APP_MESSAGES.AUTH.ERROR_UNAUTHORIZED);
        }
        return user;
    }
    async signIn(signInModel) {
        const { email, password } = signInModel;
        const user = await this.findUserByEmail(email);
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            this.logger.log(`Invalid password for user with email: ${email}`);
            throw new common_1.UnauthorizedException(constants_1.APP_MESSAGES.AUTH.ERROR_UNAUTHORIZED);
        }
        const accessToken = await this.generateAccessToken(user.email);
        this.logger.log(`User login successful with email: ${email}`);
        return { name: user.name, email: user.email, accessToken };
    }
    async signUp(signUpModel) {
        const { password } = signUpModel;
        const hashedPassword = await this.helperService.getPasswordHashed(password);
        const user = await this.userService.create({
            ...signUpModel,
            password: hashedPassword,
        });
        const accessToken = await this.generateAccessToken(user.email);
        return { name: user.name, email: user.email, accessToken };
    }
    async validate(payload) {
        const user = await this.findUserByEmail(payload.email);
        if (!user) {
            throw new common_1.NotFoundException(constants_1.APP_MESSAGES.USER.ERROR_USER_NOT_FOUND);
        }
        return user;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = AuthService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('IUserService')),
    __metadata("design:paramtypes", [Object, environment_service_1.EnvironmentService,
        helper_service_1.HelperService])
], AuthService);
//# sourceMappingURL=auth.service.js.map