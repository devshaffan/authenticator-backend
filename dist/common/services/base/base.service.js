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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
const common_1 = require("@nestjs/common");
let BaseService = class BaseService {
    constructor(repo) {
        this.repo = repo;
    }
    getAll(options) {
        return this.repo.findAll(options);
    }
    getOne(options) {
        return this.repo.findOne(options);
    }
    create(payload) {
        return this.repo.create(payload);
    }
    update(payload) {
        return this.repo.update(payload);
    }
    delete(id) {
        return this.repo.delete(id);
    }
};
exports.BaseService = BaseService;
exports.BaseService = BaseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Object])
], BaseService);
//# sourceMappingURL=base.service.js.map