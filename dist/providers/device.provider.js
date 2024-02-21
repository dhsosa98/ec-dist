"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceProvider = void 0;
const device_entity_1 = require("../entities/device.entity");
exports.DeviceProvider = [
    {
        provide: 'DEVICE_REPOSITORY',
        useValue: device_entity_1.Device,
    },
];
//# sourceMappingURL=device.provider.js.map