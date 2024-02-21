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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("./user.service");
const bcrypt = require("bcrypt");
const device_service_1 = require("./device.service");
let AuthService = class AuthService {
    constructor(usersService, jwtService, deviceService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.deviceService = deviceService;
    }
    async validateUser(username, pass) {
        const user = await this.usersService.findOne(username);
        if (!user) {
            return null;
        }
        const isValid = await bcrypt.compare(pass, user === null || user === void 0 ? void 0 : user.password);
        if (isValid) {
            const { password } = user, result = __rest(user, ["password"]);
            return result;
        }
        return null;
    }
    async login(user) {
        const payload = {
            username: user.dataValues.username,
            sub: user.dataValues.id,
        };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
    async register(user) {
        return await this.usersService.create(user);
    }
    async signUpWithGoogle(token, user) {
        var _a, _b, _c;
        const userDB = await this.usersService.signWithGoogle(token, user);
        return {
            access_token: this.jwtService.sign({ username: (_a = userDB === null || userDB === void 0 ? void 0 : userDB.dataValues) === null || _a === void 0 ? void 0 : _a.username, sub: (_b = userDB === null || userDB === void 0 ? void 0 : userDB.dataValues) === null || _b === void 0 ? void 0 : _b.id }),
            user: (_c = userDB === null || userDB === void 0 ? void 0 : userDB.dataValues) === null || _c === void 0 ? void 0 : _c.username,
        };
    }
    async registerFdcToken(userId, token) {
        return await this.deviceService.registerFdcToken(userId, token);
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UsersService,
        jwt_1.JwtService,
        device_service_1.DeviceService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map