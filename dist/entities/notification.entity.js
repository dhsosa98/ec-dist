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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const todoItem_entity_1 = require("./todoItem.entity");
let Notification = class Notification extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ primaryKey: true, autoIncrement: true }),
    __metadata("design:type", Number)
], Notification.prototype, "notificationId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    (0, sequelize_typescript_1.ForeignKey)(() => todoItem_entity_1.TodoItem),
    __metadata("design:type", Number)
], Notification.prototype, "taskId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Notification.prototype, "userId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Notification.prototype, "title", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Notification.prototype, "body", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Notification.prototype, "schedule", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Notification.prototype, "provider", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Notification.prototype, "sentAt", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], Notification.prototype, "active", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => todoItem_entity_1.TodoItem, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", todoItem_entity_1.TodoItem)
], Notification.prototype, "todoItem", void 0);
Notification = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'notification', timestamps: true })
], Notification);
exports.Notification = Notification;
//# sourceMappingURL=notification.entity.js.map