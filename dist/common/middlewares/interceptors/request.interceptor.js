"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestInterceptor = void 0;
const common_1 = require("@nestjs/common");
let RequestInterceptor = class RequestInterceptor {
    intercept(context, next) {
        const req = context.switchToHttp().getRequest();
        const { method, originalUrl, ip } = req;
        const userAgent = req.get('user-agent') || '';
        common_1.Logger.log(`Incoming Request: ${method} ${originalUrl} from ${ip} - ${userAgent}`);
        if (req.body) {
            common_1.Logger.log(`Request Payload: ${JSON.stringify(req.body)}`);
        }
        if (req.query) {
            common_1.Logger.log(`Query Parameters: ${JSON.stringify(req.query)}`);
        }
        return next.handle();
    }
};
exports.RequestInterceptor = RequestInterceptor;
exports.RequestInterceptor = RequestInterceptor = __decorate([
    (0, common_1.Injectable)()
], RequestInterceptor);
//# sourceMappingURL=request.interceptor.js.map