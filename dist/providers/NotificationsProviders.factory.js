"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NotificationProviderFactory_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsProviderFactory = exports.NotificationProviderFactory = void 0;
const common_1 = require("@nestjs/common");
const firebase_service_1 = require("../services/firebase.service");
const telegram_service_1 = require("../services/telegram.service");
let NotificationProviderFactory = NotificationProviderFactory_1 = class NotificationProviderFactory {
    create(provider) {
        switch (provider) {
            case 'firebase':
                return NotificationProviderFactory_1.fireBaseService;
            case 'telegram':
                return NotificationProviderFactory_1.telegramService;
            default:
                throw new Error('Provider not found');
        }
    }
};
NotificationProviderFactory = NotificationProviderFactory_1 = __decorate([
    (0, common_1.Injectable)()
], NotificationProviderFactory);
exports.NotificationProviderFactory = NotificationProviderFactory;
exports.NotificationsProviderFactory = {
    provide: 'NOTIFICATION_PROVIDER_FACTORY',
    useFactory: (firebase, telegram) => {
        NotificationProviderFactory.fireBaseService = firebase;
        NotificationProviderFactory.telegramService = telegram;
        return new NotificationProviderFactory();
    },
    inject: [firebase_service_1.FirebaseService, telegram_service_1.TelegramService]
};
//# sourceMappingURL=NotificationsProviders.factory.js.map