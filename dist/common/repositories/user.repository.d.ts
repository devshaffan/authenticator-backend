import { User } from '../entities/user/user.entity';
import { BaseRepository } from './base/base.repository';
import { Repository } from 'typeorm';
export declare class UserRepository extends BaseRepository<User> {
    private readonly userRepo;
    constructor(userRepo: Repository<User>);
}
