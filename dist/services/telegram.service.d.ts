import { HttpService } from "@nestjs/common";
import { NotificationProvider } from "./notification.provider.interface";
export declare class TelegramService implements NotificationProvider {
    private telegramConfig;
    private readonly httpService;
    constructor(telegramConfig: {
        TELEGRAM_API: string;
        CHAT_ID: string;
        BOT_TOKEN: string;
    }, httpService: HttpService);
    sendNotification(token: string, title: string, body: string): Promise<void>;
}
