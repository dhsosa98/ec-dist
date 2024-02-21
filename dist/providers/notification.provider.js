"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationProvider = void 0;
const notification_entity_1 = require("../entities/notification.entity");
exports.NotificationProvider = [
    {
        provide: 'NOTIFICATION_REPOSITORY',
        useValue: notification_entity_1.Notification,
    },
];
//# sourceMappingURL=notification.provider.js.map