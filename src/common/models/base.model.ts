import { ObjectId } from 'typeorm';

export class BaseModel {
  id: ObjectId;
  created_at: Date;
  updated_at: Date;
}
