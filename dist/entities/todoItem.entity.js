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
exports.TodoItem = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const directory_entity_1 = require("./directory.entity");
const user_entity_1 = require("./user.entity");
let TodoItem = class TodoItem extends sequelize_typescript_1.Model {
    get notification() {
        return this.getDataValue('notification');
    }
    set notification(value) {
        this.setDataValue('notification', value);
    }
    static emitTaskCreatedEvent(instance) {
        this.eventEmitter.emit('task.created', instance);
    }
    static emitTaskUpdatedEvent(instance) {
        this.eventEmitter.emit('task.updated', instance);
    }
    static emitTaskDeletedEvent(instance) {
        this.eventEmitter.emit('task.deleted', instance);
    }
};
__decorate([
    (0, sequelize_typescript_1.Column)({ primaryKey: true, autoIncrement: true }),
    __metadata("design:type", Number)
], TodoItem.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], TodoItem.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ defaultValue: false }),
    __metadata("design:type", Boolean)
], TodoItem.prototype, "selected", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ defaultValue: 0 }),
    __metadata("design:type", Number)
], TodoItem.prototype, "order", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => directory_entity_1.Directory),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], TodoItem.prototype, "directoryId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_entity_1.User),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], TodoItem.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => directory_entity_1.Directory, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", directory_entity_1.Directory)
], TodoItem.prototype, "directory", void 0);
__decorate([
    sequelize_typescript_1.AfterCreate,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TodoItem]),
    __metadata("design:returntype", void 0)
], TodoItem, "emitTaskCreatedEvent", null);
__decorate([
    sequelize_typescript_1.AfterUpdate,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TodoItem]),
    __metadata("design:returntype", void 0)
], TodoItem, "emitTaskUpdatedEvent", null);
__decorate([
    sequelize_typescript_1.AfterDestroy,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TodoItem]),
    __metadata("design:returntype", void 0)
], TodoItem, "emitTaskDeletedEvent", null);
TodoItem = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'todoitem', timestamps: true })
], TodoItem);
exports.TodoItem = TodoItem;
//# sourceMappingURL=todoItem.entity.js.map