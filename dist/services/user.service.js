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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../entities/user.entity");
const bcrypt = require("bcrypt");
require('dotenv').config();
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async findOne(username) {
        return this.usersRepository.findOne({ where: { username } });
    }
    async create(user) {
        const { password, username } = user;
        const userDB = this.usersRepository.findOne({ where: { username } });
        if (userDB) {
            throw new common_1.ConflictException('User already exists');
        }
        const newUser = new user_entity_1.User(Object.assign(Object.assign({}, user), { password: await bcrypt.hash(password, Number(process.env.HASH_SALT) || 10) }));
        await newUser.save();
        return newUser;
    }
    async signWithGoogle(token, user) {
        const { displayName, email } = user;
        const userDB = await this.usersRepository.findOne({ where: { username: email } });
        if (userDB) {
            userDB.password = await bcrypt.hash(token, Number(process.env.HASH_SALT) || 10);
            await userDB.save();
            return userDB;
        }
        const newUser = new user_entity_1.User({ username: email, password: await bcrypt.hash(token, Number(process.env.HASH_SALT) || 10), name: displayName, surname: '', role: 'user' });
        await newUser.save();
        return newUser;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('USER_REPOSITORY')),
    __metadata("design:paramtypes", [Object])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=user.service.js.map