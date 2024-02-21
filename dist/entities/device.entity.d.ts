import { Model } from 'sequelize-typescript';
import { User } from './user.entity';
export declare class Device extends Model {
    deviceId: number;
    userId: number;
    user: User;
    fdcToken: string;
}
