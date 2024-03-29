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
exports.DirectoryController = void 0;
const common_1 = require("@nestjs/common");
const directory_dto_1 = require("../dtos/directory.dto");
const directory_service_1 = require("../services/directory.service");
let DirectoryController = class DirectoryController {
    constructor(directoriesService) {
        this.directoriesService = directoriesService;
    }
    getDirectories(req) {
        return this.directoriesService.findAll(req.user.userId);
    }
    getTree(req, id) {
        return this.directoriesService.getTree(req.user.userId, id);
    }
    getDirectory(req, id) {
        return this.directoriesService.findOne(req.user.userId, id);
    }
    getTodoItems(req, id, search) {
        return this.directoriesService.findAllTodoItems(req.user.userId, id, search);
    }
    deleteDirectory(req, id) {
        return this.directoriesService.delete(req.user.userId, id);
    }
    createDirectory(req, directory) {
        return this.directoriesService.create(req.user.userId, directory);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DirectoryController.prototype, "getDirectories", null);
__decorate([
    (0, common_1.Get)(':id/tree'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", void 0)
], DirectoryController.prototype, "getTree", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", void 0)
], DirectoryController.prototype, "getDirectory", null);
__decorate([
    (0, common_1.Get)(':id/todoitems'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, String]),
    __metadata("design:returntype", void 0)
], DirectoryController.prototype, "getTodoItems", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", void 0)
], DirectoryController.prototype, "deleteDirectory", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, directory_dto_1.DirectoryDto]),
    __metadata("design:returntype", void 0)
], DirectoryController.prototype, "createDirectory", null);
DirectoryController = __decorate([
    (0, common_1.Controller)('directories'),
    __metadata("design:paramtypes", [directory_service_1.DirectoryService])
], DirectoryController);
exports.DirectoryController = DirectoryController;
//# sourceMappingURL=directory.controller.js.map