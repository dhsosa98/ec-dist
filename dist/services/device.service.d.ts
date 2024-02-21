import { Device } from "src/entities/device.entity";
export declare class DeviceService {
    private deviceRepository;
    constructor(deviceRepository: typeof Device);
    registerFdcToken(userId: number, token: string): Promise<Device>;
}
