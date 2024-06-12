"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignInModel = exports.SignUpModel = void 0;
const swagger_1 = require("@nestjs/swagger");
const user_model_1 = require("./user.model");
class SignUpModel extends user_model_1.UserModel {
}
exports.SignUpModel = SignUpModel;
class SignInModel extends (0, swagger_1.OmitType)(user_model_1.UserModel, ['name']) {
}
exports.SignInModel = SignInModel;
//# sourceMappingURL=auth.model.js.map