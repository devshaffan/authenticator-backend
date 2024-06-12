import { User } from 'src/common/entities/user/user.entity';
import { IUserRepository } from 'src/common/interfaces/irepositories/user.repository.interface';
import { IUserService } from 'src/common/interfaces/iservices/user.service.interface';
import { BaseService } from 'src/common/services/base/base.service';
import { ObjectId } from 'typeorm';
export declare class UserService extends BaseService<User> implements IUserService {
    private readonly userRepo;
    constructor(userRepo: IUserRepository);
    getUserById(userId: ObjectId): Promise<User>;
}
