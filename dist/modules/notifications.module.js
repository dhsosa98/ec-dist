"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsModule = void 0;
const common_1 = require("@nestjs/common");
const device_provider_1 = require("../providers/device.provider");
const firebase_service_1 = require("../services/firebase.service");
const notification_service_1 = require("../services/notification.service");
const auth_module_1 = require("./auth.module");
const firebase_module_1 = require("./firebase.module");
const notification_provider_1 = require("../providers/notification.provider");
const scheduleParser_provider_1 = require("../providers/scheduleParser.provider");
let NotificationsModule = class NotificationsModule {
};
NotificationsModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule, firebase_module_1.FirebaseModule],
        providers: [notification_service_1.NotificationService, {
                provide: 'NOTIFICATION_PROVIDER',
                useClass: firebase_service_1.FirebaseService,
            }, ...device_provider_1.DeviceProvider, ...notification_provider_1.NotificationProvider, scheduleParser_provider_1.ScheduleParserProvider],
        exports: [notification_service_1.NotificationService, ...notification_provider_1.NotificationProvider]
    })
], NotificationsModule);
exports.NotificationsModule = NotificationsModule;
//# sourceMappingURL=notifications.module.js.map