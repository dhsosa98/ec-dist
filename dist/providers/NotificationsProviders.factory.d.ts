import { Provider } from "@nestjs/common";
import { FirebaseService } from "src/services/firebase.service";
import { TelegramService } from "src/services/telegram.service";
export declare class NotificationProviderFactory {
    static fireBaseService: FirebaseService;
    static telegramService: TelegramService;
    create(provider: string): FirebaseService | TelegramService;
}
export declare const NotificationsProviderFactory: Provider<any>;
