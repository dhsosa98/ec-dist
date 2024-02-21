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
exports.DirectoryService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("sequelize");
const directory_entity_1 = require("../entities/directory.entity");
const todoItem_entity_1 = require("../entities/todoItem.entity");
const todoItem_service_1 = require("./todoItem.service");
let DirectoryService = class DirectoryService {
    constructor(directoryRepository, todoitemsService) {
        this.directoryRepository = directoryRepository;
        this.todoitemsService = todoitemsService;
    }
    async findAll(userId) {
        return this.directoryRepository.findAll({ where: { [sequelize_1.Op.and]: [{ userId }, { parentId: null }] } });
    }
    async findOne(userId, id) {
        const directory = await this.directoryRepository.findOne({
            include: [directory_entity_1.Directory, {
                    model: todoItem_entity_1.TodoItem,
                    as: 'todoItem',
                    order: [['order', 'ASC']],
                    separate: true,
                }],
            where: { [sequelize_1.Op.and]: [{ id }, { userId }] },
        });
        if (!directory) {
            throw new common_1.NotFoundException(`Directory with id ${id} not found`);
        }
        return directory;
    }
    async getTree(userId, id) {
        let directory = await this.directoryRepository.findOne({
            where: { [sequelize_1.Op.and]: [{ id }, { userId }] },
        });
        if (!directory) {
            throw new common_1.NotFoundException(`Directory with id ${id} not found`);
        }
        let tree = [];
        tree.push(directory);
        while (true) {
            const parent = await this.directoryRepository.findOne({
                where: { id: directory.parentId },
            });
            if (!parent) {
                break;
            }
            tree.push(parent);
            directory = parent;
        }
        return tree.reverse();
    }
    async findAllTodoItems(userId, directoryId, search) {
        const result = await this.directoryRepository.findOne({
            where: { id: directoryId },
        });
        if (!result) {
            throw new common_1.NotFoundException(`Not found any To-do list with Directory ${directoryId} id`);
        }
        return this.todoitemsService.findAllByRepositoryId(directoryId, userId, search);
    }
    async delete(userId, id) {
        const directory = await this.directoryRepository.findOne({
            where: { [sequelize_1.Op.and]: [{ id }, { userId }] },
        });
        if (!directory) {
            throw new common_1.NotFoundException(`Directory with id ${id} not found`);
        }
        await directory.destroy();
        return directory;
    }
    async create(userId, directory) {
        const newDirectory = new directory_entity_1.Directory(Object.assign({ userId }, directory));
        await newDirectory.save();
        return newDirectory;
    }
};
DirectoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('DIRECTORY_REPOSITORY')),
    __metadata("design:paramtypes", [Object, todoItem_service_1.TodoItemService])
], DirectoryService);
exports.DirectoryService = DirectoryService;
//# sourceMappingURL=directory.service.js.map