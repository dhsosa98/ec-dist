import { Model } from 'sequelize-typescript';
import { Directory } from './directory.entity';
import { TodoItem } from './todoItem.entity';
import { Device } from './device.entity';
export declare class User extends Model {
    id: number;
    username: string;
    name: string;
    surname: string;
    password: string;
    role: string;
    directory: Directory;
    device: Device;
    todoItem: TodoItem;
}
