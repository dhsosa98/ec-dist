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
exports.TodoItemService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("sequelize");
const todoItem_entity_1 = require("../entities/todoItem.entity");
let TodoItemService = class TodoItemService {
    constructor(todoItemRepository, notificationRepository) {
        this.todoItemRepository = todoItemRepository;
        this.notificationRepository = notificationRepository;
    }
    async findAll(userId) {
        return this.todoItemRepository.findAll({ where: { userId } });
    }
    async findAllByRepositoryId(directoryId, userId, search) {
        const result = await this.todoItemRepository.findAll({
            order: [['order', 'ASC']],
            where: {
                [sequelize_1.Op.and]: [
                    { directoryId },
                    { userId },
                    search && { description: { [sequelize_1.Op.like]: `%${search.trim()}%` } },
                ],
            },
        });
        return result;
    }
    async updateOrder(userId, todoItems) {
        const promises = todoItems.map(async (todoItem) => {
            const { id, order } = todoItem;
            if (order === undefined || !id) {
                throw new common_1.BadRequestException('Invalid order or id');
            }
            const result = await this.todoItemRepository.findOne({
                where: { [sequelize_1.Op.and]: [{ id }, { userId }] },
            });
            if (!result) {
                throw new common_1.NotFoundException(`TodoItem with id ${id} not found`);
            }
            result.order = order;
            await result.save();
            return result;
        });
        return Promise.all(promises);
    }
    async findOne(userId, id) {
        var _a, _b;
        const result = await this.todoItemRepository.findOne({
            where: { [sequelize_1.Op.and]: [{ id }, { userId }] },
        });
        if (!result) {
            throw new common_1.NotFoundException(`TodoItem with id ${id} not found`);
        }
        const dbNotification = await this.notificationRepository.findAll({
            where: { taskId: id },
            attributes: ['active', 'provider', 'schedule'],
        });
        result.notification = {
            active: ((_a = dbNotification[0]) === null || _a === void 0 ? void 0 : _a.active) || false,
            providers: dbNotification.map((notification) => notification.provider),
            schedule: ((_b = dbNotification[0]) === null || _b === void 0 ? void 0 : _b.schedule) || '',
        };
        return result;
    }
    async create(userId, todoItem) {
        const newTodoItem = new todoItem_entity_1.TodoItem(Object.assign({ userId }, todoItem));
        await newTodoItem.save();
        return newTodoItem;
    }
    async delete(userId, id) {
        const todoItem = await this.todoItemRepository.findOne({
            where: { [sequelize_1.Op.and]: [{ id }, { userId }] },
        });
        if (!todoItem) {
            throw new common_1.NotFoundException(`TodoItem with id ${id} not found`);
        }
        await todoItem.destroy();
        return todoItem;
    }
    async update(userId, id, todoItem) {
        const { description, selected, notification } = todoItem;
        const result = await this.todoItemRepository.findOne({
            where: { [sequelize_1.Op.and]: [{ id }, { userId }] },
        });
        if (!result) {
            throw new common_1.NotFoundException(`TodoItem with id ${id} not found`);
        }
        result.description = description;
        result.selected = selected;
        result.notification = notification;
        result.changed('updatedAt', true);
        await result.save();
        return result;
    }
};
TodoItemService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('TODOITEM_REPOSITORY')),
    __param(1, (0, common_1.Inject)('NOTIFICATION_REPOSITORY')),
    __metadata("design:paramtypes", [Object, Object])
], TodoItemService);
exports.TodoItemService = TodoItemService;
//# sourceMappingURL=todoItem.service.js.map