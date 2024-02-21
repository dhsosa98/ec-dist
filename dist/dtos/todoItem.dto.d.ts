import { NotificationDto } from './notifcation.dto';
export declare class TodoItemDto {
    description: string;
    selected: boolean;
    directoryId: number;
    notification?: NotificationDto;
}
export declare class UpdateToDoItemOrderDto extends TodoItemDto {
    id: number;
    order: number;
}
