"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseProviders = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const directory_entity_1 = require("../entities/directory.entity");
const todoItem_entity_1 = require("../entities/todoItem.entity");
const user_entity_1 = require("../entities/user.entity");
const mysql2_1 = require("mysql2");
const device_entity_1 = require("../entities/device.entity");
const notification_entity_1 = require("../entities/notification.entity");
exports.DatabaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new sequelize_typescript_1.Sequelize({
                dialectModule: mysql2_1.default,
                dialect: process.env.DB_DIALECT || 'mysql',
                host: process.env.DB_HOST || 'localhost',
                port: parseInt(process.env.DB_PORT || '3306'),
                username: process.env.DB_USERNAME || 'root',
                password: process.env.DB_PASSWORD || 'root',
                database: process.env.DB_NAME || 'ensolvers-challenge',
                pool: {
                    max: 3,
                    min: 0,
                    idle: 10000,
                },
            });
            sequelize.addModels([todoItem_entity_1.TodoItem, directory_entity_1.Directory, user_entity_1.User, device_entity_1.Device, notification_entity_1.Notification]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
//# sourceMappingURL=db.provider.js.map