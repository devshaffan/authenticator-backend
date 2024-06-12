"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseInterceptor = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const operators_1 = require("rxjs/operators");
const response_message_decorator_1 = require("../../decorators/response-message.decorator");
let ResponseInterceptor = class ResponseInterceptor {
    constructor() {
        this.reflector = new core_1.Reflector();
        this.errorHandler = (error) => {
            if (error instanceof common_1.HttpException) {
                common_1.Logger.error('ERROR: ', error.message, 'STACK: ', error.stack);
                const status = error.getStatus();
                const message = error.getResponse()['message'];
                let errorMessage = message;
                if (Array.isArray(message)) {
                    errorMessage = message[0];
                }
                throw new common_1.HttpException({ success: false, status, message: errorMessage }, status);
            }
            else {
                const status = 500;
                const message = error.message || 'Internal Server Error';
                throw new common_1.HttpException({ success: false, status, message }, status);
            }
        };
    }
    intercept(context, next) {
        const responseMessage = this.reflector.get(response_message_decorator_1.ResponseMessageKey, context.getHandler()) ||
            '';
        return next.handle().pipe((0, operators_1.map)((data) => {
            return {
                success: true,
                message: responseMessage,
                data: data,
            };
        }), (0, operators_1.catchError)(this.errorHandler));
    }
};
exports.ResponseInterceptor = ResponseInterceptor;
exports.ResponseInterceptor = ResponseInterceptor = __decorate([
    (0, common_1.Injectable)()
], ResponseInterceptor);
//# sourceMappingURL=response.interceptor.js.map