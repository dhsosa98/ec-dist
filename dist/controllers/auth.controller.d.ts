import { UserDto } from 'src/dtos/user.dto';
import { AuthService } from 'src/services/auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        access_token: string;
    }>;
    getProfile(user: UserDto): Promise<import("../entities/user.entity").User>;
    signUpWithGoogle(body: {
        token: string;
        user: any;
    }): Promise<{
        access_token: string;
        user: any;
    }>;
    registerFdcToken(req: any, body: {
        token: string;
    }): Promise<import("../entities/device.entity").Device>;
}
