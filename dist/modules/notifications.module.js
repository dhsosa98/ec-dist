"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsModule = exports.telegramConfigProvider = void 0;
const common_1 = require("@nestjs/common");
const device_provider_1 = require("../providers/device.provider");
const notification_service_1 = require("../services/notification.service");
const auth_module_1 = require("./auth.module");
const firebase_module_1 = require("./firebase.module");
const notification_provider_1 = require("../providers/notification.provider");
const scheduleParser_provider_1 = require("../providers/scheduleParser.provider");
const NotificationsProviders_factory_1 = require("../providers/NotificationsProviders.factory");
const telegram_service_1 = require("../services/telegram.service");
const config_1 = require("@nestjs/config");
exports.telegramConfigProvider = {
    provide: 'TELEGRAM_CONFIG',
    useFactory: (config) => {
        return {
            BOT_TOKEN: config.get('TELEGRAM_BOT_TOKEN'),
            TELEGRAM_API: config.get('TELEGRAM_API'),
            CHAT_ID: config.get('TELEGRAM_CHAT_ID'),
        };
    },
    inject: [config_1.ConfigService]
};
let NotificationsModule = class NotificationsModule {
};
NotificationsModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule, firebase_module_1.FirebaseModule, common_1.HttpModule, config_1.ConfigModule.forRoot()],
        providers: [notification_service_1.NotificationService, NotificationsProviders_factory_1.NotificationsProviderFactory, ...device_provider_1.DeviceProvider, ...notification_provider_1.NotificationProvider, scheduleParser_provider_1.ScheduleParserProvider, telegram_service_1.TelegramService, exports.telegramConfigProvider],
        exports: [notification_service_1.NotificationService, ...notification_provider_1.NotificationProvider, NotificationsProviders_factory_1.NotificationsProviderFactory]
    })
], NotificationsModule);
exports.NotificationsModule = NotificationsModule;
//# sourceMappingURL=notifications.module.js.map