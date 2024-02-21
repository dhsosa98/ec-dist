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
exports.User = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const directory_entity_1 = require("./directory.entity");
const todoItem_entity_1 = require("./todoItem.entity");
const device_entity_1 = require("./device.entity");
let User = class User extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ primaryKey: true, autoIncrement: true }),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Unique,
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "surname", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ defaultValue: 'user' }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => directory_entity_1.Directory),
    __metadata("design:type", directory_entity_1.Directory)
], User.prototype, "directory", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => device_entity_1.Device),
    __metadata("design:type", device_entity_1.Device)
], User.prototype, "device", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => todoItem_entity_1.TodoItem),
    __metadata("design:type", todoItem_entity_1.TodoItem)
], User.prototype, "todoItem", void 0);
User = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'user', timestamps: false })
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map