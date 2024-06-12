"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseMessageMetadata = exports.ResponseMessageKey = void 0;
const common_1 = require("@nestjs/common");
exports.ResponseMessageKey = 'ResponseMessageKey';
const ResponseMessageMetadata = (message) => (0, common_1.SetMetadata)(exports.ResponseMessageKey, message);
exports.ResponseMessageMetadata = ResponseMessageMetadata;
//# sourceMappingURL=response-message.decorator.js.map