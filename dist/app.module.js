"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const auth_guard_1 = require("./guards/auth.guard");
const auth_module_1 = require("./modules/auth.module");
const directory_module_1 = require("./modules/directory.module");
const todoItem_module_1 = require("./modules/todoItem.module");
const app_controller_1 = require("./app.controller");
const notifications_module_1 = require("./modules/notifications.module");
const schedule_1 = require("@nestjs/schedule");
const firebase_module_1 = require("./modules/firebase.module");
const event_emitter_1 = require("@nestjs/event-emitter");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            todoItem_module_1.todoItemModule,
            directory_module_1.DirectoryModule,
            auth_module_1.AuthModule,
            notifications_module_1.NotificationsModule,
            schedule_1.ScheduleModule.forRoot(),
            firebase_module_1.FirebaseModule,
            event_emitter_1.EventEmitterModule.forRoot()
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: auth_guard_1.JwtAuthGuard,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map