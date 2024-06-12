import { IBaseRepository } from 'src/common/interfaces/irepositories/base/base.repository.interface';
import { IBaseService } from 'src/common/interfaces/iservices/base/base.service.interface';
import { DeleteResult, FindManyOptions, FindOneOptions } from 'typeorm';
export declare class BaseService<T> implements IBaseService<T> {
    private readonly repo;
    constructor(repo: IBaseRepository<T>);
    getAll(options: FindManyOptions<T>): Promise<T[]>;
    getOne(options: FindOneOptions<T>): Promise<T>;
    create(payload: T): Promise<T>;
    update(payload: T): Promise<T>;
    delete(id: number): Promise<DeleteResult>;
}
