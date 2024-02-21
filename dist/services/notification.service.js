"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
const common_1 = require("@nestjs/common");
const event_emitter_1 = require("@nestjs/event-emitter");
const schedule_1 = require("@nestjs/schedule");
const notification_entity_1 = require("../entities/notification.entity");
const todoItem_entity_1 = require("../entities/todoItem.entity");
const scheduleParser_provider_1 = require("../providers/scheduleParser.provider");
let NotificationService = class NotificationService {
    constructor(notificationProvider, notificationRepository, deviceRepository, scheduleNotificationParser) {
        this.notificationProvider = notificationProvider;
        this.notificationRepository = notificationRepository;
        this.deviceRepository = deviceRepository;
        this.scheduleNotificationParser = scheduleNotificationParser;
    }
    async createNotification(model) {
        const { description, userId, id: taskId, notification: modelNotification } = model;
        if (!modelNotification) {
            return;
        }
        const { provider, schedule, active } = modelNotification;
        const title = 'Reminder: ';
        const body = description;
        const existNotification = await this.notificationRepository.findOne({ where: { taskId } });
        if (existNotification) {
            return;
        }
        const notification = new notification_entity_1.Notification();
        notification.taskId = taskId;
        notification.title = title;
        notification.body = body;
        notification.userId = userId;
        notification.provider = provider;
        notification.schedule = schedule;
        notification.active = active;
        await notification.save();
    }
    async updateNotification(model) {
        const { description, userId, id: taskId, notification: modelNotification } = model;
        if (!modelNotification) {
            return;
        }
        const { provider, schedule, active } = modelNotification;
        const title = 'Reminder: ';
        const body = description;
        const existNotification = await this.notificationRepository.findOne({ where: { taskId } });
        if (existNotification) {
            existNotification.title = title;
            existNotification.body = body;
            existNotification.provider = provider;
            existNotification.schedule = schedule;
            existNotification.sentAt = null;
            await existNotification.save();
            return;
        }
        const notification = new notification_entity_1.Notification();
        notification.taskId = taskId;
        notification.title = title;
        notification.body = body;
        notification.userId = userId;
        notification.provider = provider;
        notification.schedule = schedule;
        notification.active = active;
        await notification.save();
    }
    async deleteNotification(tmodel) {
        const { id: taskId } = tmodel;
        await this.notificationRepository.destroy({ where: { taskId } });
    }
    async sendNotificationToUsers() {
        const notifications = await this.notificationRepository.findAll({ where: { active: true } });
        const notificationsThatShouldBeSent = notifications.filter((notification) => {
            return this.shouldSendNofication(notification);
        });
        for (const notification of notificationsThatShouldBeSent) {
            const userId = notification.userId;
            const devices = await this.deviceRepository.findAll({ where: { userId } });
            for (const device of devices) {
                await this.sendNotification(device.fdcToken, notification.title, notification.body);
            }
            notification.sentAt = this.getActualDate();
            notification.save();
        }
    }
    getActualDate() {
        const now = new Date();
        return now;
    }
    shouldSendNofication(notification) {
        var _a, _b, _c, _d, _e;
        const schedule = this.scheduleNotificationParser.parse(notification.schedule);
        console.log('schedule', schedule);
        const now = this.getActualDate();
        const day = now.getDay();
        const hour = now.getHours();
        const month = now.getMonth() + 1;
        const minute = now.getMinutes();
        const monthDay = now.getDate();
        console.log('sentAt', notification.sentAt);
        if (schedule.everyMinutes) {
            const minuteSentAt = ((_a = notification.sentAt) === null || _a === void 0 ? void 0 : _a.getMinutes()) || 0;
            return Math.abs(minute - minuteSentAt) >= schedule.everyMinutes;
        }
        if (schedule.everyHours) {
            const hourSentAt = ((_b = notification.sentAt) === null || _b === void 0 ? void 0 : _b.getHours()) || 0;
            return Math.abs(hour - hourSentAt) >= schedule.everyHours;
        }
        if (schedule.everyDays) {
            const daySentAt = ((_c = notification.sentAt) === null || _c === void 0 ? void 0 : _c.getDate()) || 0;
            return minute == schedule.atTime.minute && hour == schedule.atTime.hour && Math.abs(monthDay - daySentAt) >= schedule.everyDays;
        }
        if (schedule.everyWeeks) {
            const weekNumberSentAt = Math.ceil(((_d = notification.sentAt) === null || _d === void 0 ? void 0 : _d.getDate()) / 7);
            const weekNumber = Math.ceil(monthDay / 7);
            return minute == schedule.atTime.minute && hour == schedule.atTime.hour && day == this.getDayOfWeek(schedule.onDayOfWeek) && Math.abs(weekNumber - weekNumberSentAt) >= schedule.everyWeeks;
        }
        if (schedule.everyMonths) {
            const sentAtMonth = (((_e = notification.sentAt) === null || _e === void 0 ? void 0 : _e.getMonth()) || -1) + 1;
            if (schedule.onEach) {
                return monthDay == (schedule === null || schedule === void 0 ? void 0 : schedule.onEach.day) && hour == schedule.atTime.hour && minute == schedule.atTime.minute && Math.abs(month - sentAtMonth) >= schedule.everyMonths;
            }
            const dayOfWeek = this.getDayOfWeek(schedule.onThe.day);
            const position = this.getPosition(schedule.onThe.position);
            const weekNumber = Math.ceil(monthDay / 7);
            const isInDesiredWeek = weekNumber === position;
            if (day === dayOfWeek && isInDesiredWeek) {
                return minute == schedule.atTime.minute && hour == schedule.atTime.hour && Math.abs(month - sentAtMonth) >= schedule.everyMonths;
            }
        }
        else {
            throw new Error('Invalid schedule');
        }
    }
    getPosition(position) {
        switch (position) {
            case 'first':
                return 1;
            case 'second':
                return 2;
            case 'third':
                return 3;
            case 'fourth':
                return 4;
            case 'fifth':
                return 5;
            case 'last':
                return 6;
            default:
                throw new Error('Invalid position');
        }
    }
    getDayOfWeek(day) {
        switch (day) {
            case 'Mon':
                return 1;
            case 'Tue':
                return 2;
            case 'Wed':
                return 3;
            case 'Thu':
                return 4;
            case 'Fri':
                return 5;
            case 'Sat':
                return 6;
            case 'Sun':
                return 7;
            default:
                throw new Error('Invalid day of week');
        }
    }
    async sendNotification(token, title, body) {
        await this.notificationProvider.sendNotification(token, title, body);
    }
};
__decorate([
    (0, event_emitter_1.OnEvent)('task.created'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [todoItem_entity_1.TodoItem]),
    __metadata("design:returntype", Promise)
], NotificationService.prototype, "createNotification", null);
__decorate([
    (0, event_emitter_1.OnEvent)('task.updated'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [todoItem_entity_1.TodoItem]),
    __metadata("design:returntype", Promise)
], NotificationService.prototype, "updateNotification", null);
__decorate([
    (0, event_emitter_1.OnEvent)('task.deleted'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [todoItem_entity_1.TodoItem]),
    __metadata("design:returntype", Promise)
], NotificationService.prototype, "deleteNotification", null);
__decorate([
    (0, schedule_1.Cron)('*/15 * * * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NotificationService.prototype, "sendNotificationToUsers", null);
NotificationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('NOTIFICATION_PROVIDER')),
    __param(1, (0, common_1.Inject)('NOTIFICATION_REPOSITORY')),
    __param(2, (0, common_1.Inject)('DEVICE_REPOSITORY')),
    __param(3, (0, common_1.Inject)('SCHEDULE_PARSER')),
    __metadata("design:paramtypes", [Object, Object, Object, scheduleParser_provider_1.ScheduleParser])
], NotificationService);
exports.NotificationService = NotificationService;
//# sourceMappingURL=notification.service.js.map