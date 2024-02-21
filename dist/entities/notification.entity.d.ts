import { Model } from "sequelize-typescript";
import { TodoItem } from "./todoItem.entity";
export declare class Notification extends Model {
    notificationId: number;
    taskId: number;
    userId: number;
    title: string;
    body: string;
    schedule: string;
    provider: string;
    sentAt: Date;
    active: boolean;
    todoItem: TodoItem;
}
