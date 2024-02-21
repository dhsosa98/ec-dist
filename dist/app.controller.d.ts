import { NotificationService } from "./services/notification.service";
export declare class AppController {
    private notificationService;
    constructor(notificationService: NotificationService);
    sendNotificationToUsers(): Promise<string>;
}
