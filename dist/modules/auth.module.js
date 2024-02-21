"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../services/auth.service");
const jwt_1 = require("@nestjs/jwt");
const auth_jwt_strategy_1 = require("../strategies/auth.jwt.strategy");
const user_module_1 = require("./user.module");
const passport_1 = require("@nestjs/passport");
const auth_local_strategy_1 = require("../strategies/auth.local.strategy");
const auth_controller_1 = require("../controllers/auth.controller");
const device_provider_1 = require("../providers/device.provider");
const device_service_1 = require("../services/device.service");
require('dotenv').config();
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_module_1.UsersModule,
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: process.env.JTW_SECRET || 'secretKey',
                signOptions: { expiresIn: '1d' },
            }),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, auth_jwt_strategy_1.JwtStrategy, auth_local_strategy_1.LocalStrategy, device_service_1.DeviceService, ...device_provider_1.DeviceProvider],
        exports: [auth_service_1.AuthService, ...device_provider_1.DeviceProvider],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map