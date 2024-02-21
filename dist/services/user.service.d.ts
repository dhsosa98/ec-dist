import { UserDto } from 'src/dtos/user.dto';
import { User } from 'src/entities/user.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: typeof User);
    findOne(username: string): Promise<User | undefined>;
    create(user: UserDto): Promise<User>;
    signWithGoogle(token: string, user: any): Promise<User>;
}
