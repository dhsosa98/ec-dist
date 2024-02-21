import { Model } from 'sequelize-typescript';
import { TodoItem } from './todoItem.entity';
import { User } from './user.entity';
export declare class Directory extends Model {
    id: number;
    name: string;
    parentId: number;
    children: Directory[];
    todoItem: TodoItem;
    user: User;
    parent?: Directory;
    userId: number;
}
