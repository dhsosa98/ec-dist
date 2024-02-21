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
var Directory_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Directory = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const todoItem_entity_1 = require("./todoItem.entity");
const user_entity_1 = require("./user.entity");
let Directory = Directory_1 = class Directory extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ primaryKey: true, autoIncrement: true }),
    __metadata("design:type", Number)
], Directory.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Directory.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Directory_1),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Directory.prototype, "parentId", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Directory_1),
    __metadata("design:type", Array)
], Directory.prototype, "children", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => todoItem_entity_1.TodoItem),
    __metadata("design:type", todoItem_entity_1.TodoItem)
], Directory.prototype, "todoItem", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_entity_1.User, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", user_entity_1.User)
], Directory.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_entity_1.User),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Directory.prototype, "userId", void 0);
Directory = Directory_1 = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'directory', timestamps: false })
], Directory);
exports.Directory = Directory;
//# sourceMappingURL=directory.entity.js.map