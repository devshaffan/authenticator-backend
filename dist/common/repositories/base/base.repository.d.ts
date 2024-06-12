import { IBaseRepository } from 'src/common/interfaces/irepositories/base/base.repository.interface';
import { DeleteResult, FindManyOptions, FindOneOptions, Repository } from 'typeorm';
export declare class BaseRepository<T> implements IBaseRepository<T> {
    private readonly repo;
    constructor(repo: Repository<T>);
    findAll(options: FindManyOptions<T>): Promise<T[]>;
    findOne(options: FindOneOptions<T>): Promise<T>;
    create(payload: T): Promise<T>;
    update(payload: T): Promise<T>;
    delete(id: number): Promise<DeleteResult>;
}
