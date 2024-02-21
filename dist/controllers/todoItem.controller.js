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
exports.TodoItemController = void 0;
const todoItem_service_1 = require("../services/todoItem.service");
const common_1 = require("@nestjs/common");
const todoItem_dto_1 = require("../dtos/todoItem.dto");
let TodoItemController = class TodoItemController {
    constructor(todoItemService) {
        this.todoItemService = todoItemService;
    }
    getTodoItems(req) {
        return this.todoItemService.findAll(req.user.userId);
    }
    getTodoItem(req, id) {
        return this.todoItemService.findOne(req.user.userId, id);
    }
    createTodoItem(req, todoItem) {
        return this.todoItemService.create(req.user.userId, todoItem);
    }
    deleteTodoItem(req, id) {
        return this.todoItemService.delete(req.user.userId, id);
    }
    updateTodoItem(req, id, todoItem) {
        return this.todoItemService.update(req.user.userId, id, todoItem);
    }
    updateOrder(req, todoItems) {
        return this.todoItemService.updateOrder(req.user.userId, todoItems);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TodoItemController.prototype, "getTodoItems", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", void 0)
], TodoItemController.prototype, "getTodoItem", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, todoItem_dto_1.TodoItemDto]),
    __metadata("design:returntype", void 0)
], TodoItemController.prototype, "createTodoItem", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", void 0)
], TodoItemController.prototype, "deleteTodoItem", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, todoItem_dto_1.TodoItemDto]),
    __metadata("design:returntype", void 0)
], TodoItemController.prototype, "updateTodoItem", null);
__decorate([
    (0, common_1.Post)('updateOrder'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Array]),
    __metadata("design:returntype", void 0)
], TodoItemController.prototype, "updateOrder", null);
TodoItemController = __decorate([
    (0, common_1.Controller)('todoitems'),
    __metadata("design:paramtypes", [todoItem_service_1.TodoItemService])
], TodoItemController);
exports.TodoItemController = TodoItemController;
//# sourceMappingURL=todoItem.controller.js.map