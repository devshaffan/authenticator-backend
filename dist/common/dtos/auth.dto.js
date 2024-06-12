"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignInDto = exports.SignUpDto = void 0;
const user_dto_1 = require("./user.dto");
const swagger_1 = require("@nestjs/swagger");
class SignUpDto extends user_dto_1.UserDto {
}
exports.SignUpDto = SignUpDto;
class SignInDto extends (0, swagger_1.OmitType)(user_dto_1.UserDto, ['name']) {
}
exports.SignInDto = SignInDto;
//# sourceMappingURL=auth.dto.js.map