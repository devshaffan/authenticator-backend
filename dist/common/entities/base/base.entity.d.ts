import { ObjectId } from 'typeorm';
export declare class BaseEntity {
    id?: ObjectId;
    created_at?: Date;
    updated_at?: Date;
}
