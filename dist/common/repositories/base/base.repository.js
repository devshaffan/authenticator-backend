"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
class BaseRepository {
    constructor(repo) {
        this.repo = repo;
    }
    async findAll(options) {
        return this.repo.find(options);
    }
    async findOne(options) {
        return this.repo.findOne(options);
    }
    async create(payload) {
        const instance = await this.repo.create(payload);
        return this.repo.save(instance);
    }
    async update(payload) {
        return this.repo.save(payload);
    }
    async delete(id) {
        return this.repo.delete(id);
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=base.repository.js.map