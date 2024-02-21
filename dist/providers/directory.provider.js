"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectoryProvider = void 0;
const directory_entity_1 = require("../entities/directory.entity");
exports.DirectoryProvider = [
    {
        provide: 'DIRECTORY_REPOSITORY',
        useValue: directory_entity_1.Directory,
    },
];
//# sourceMappingURL=directory.provider.js.map