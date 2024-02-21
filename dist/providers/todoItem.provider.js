"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItemProvider = void 0;
const event_emitter_1 = require("@nestjs/event-emitter");
const todoItem_entity_1 = require("../entities/todoItem.entity");
exports.TodoItemProvider = [
    {
        provide: 'TODOITEM_REPOSITORY',
        useFactory: (eventEmitter) => {
            todoItem_entity_1.TodoItem.eventEmitter = eventEmitter;
            return todoItem_entity_1.TodoItem;
        },
        inject: [event_emitter_1.EventEmitter2]
    },
];
//# sourceMappingURL=todoItem.provider.js.map