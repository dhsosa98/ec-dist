import { Notification } from 'src/entities/notification.entity';
export declare const NotificationProvider: {
    provide: string;
    useFactory: () => typeof Notification;
}[];
