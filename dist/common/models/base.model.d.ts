import { ObjectId } from 'typeorm';
export declare class BaseModel {
    id: ObjectId;
    created_at: Date;
    updated_at: Date;
}
