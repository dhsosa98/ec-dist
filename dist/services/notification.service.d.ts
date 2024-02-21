import { Device } from "src/entities/device.entity";
import { Notification } from "src/entities/notification.entity";
import { TodoItem } from "src/entities/todoItem.entity";
import { ScheduleParser } from "src/providers/scheduleParser.provider";
export declare class NotificationService {
    private notificationProvider;
    private notificationRepository;
    private deviceRepository;
    private scheduleNotificationParser;
    constructor(notificationProvider: any, notificationRepository: typeof Notification, deviceRepository: typeof Device, scheduleNotificationParser: ScheduleParser);
    createNotification(model: TodoItem): Promise<void>;
    updateNotification(model: TodoItem): Promise<void>;
    deleteNotification(tmodel: TodoItem): Promise<void>;
    sendNotificationToUsers(): Promise<void>;
    getActualDate(): Date;
    shouldSendNofication(notification: Notification): boolean;
    getPosition(position: string): 1 | 2 | 3 | 4 | 5 | 6;
    getDayOfWeek(day: string): 1 | 2 | 3 | 4 | 5 | 6 | 7;
    sendNotification(token: string, title: string, body: string): Promise<void>;
}
