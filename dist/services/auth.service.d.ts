import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/dtos/user.dto';
import { UsersService } from './user.service';
import { DeviceService } from './device.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    private deviceService;
    constructor(usersService: UsersService, jwtService: JwtService, deviceService: DeviceService);
    validateUser(username: string, pass: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
    register(user: UserDto): Promise<import("../entities/user.entity").User>;
    signUpWithGoogle(token: string, user: any): Promise<{
        access_token: string;
        user: any;
    }>;
    registerFdcToken(userId: number, token: string): Promise<import("../entities/device.entity").Device>;
}
