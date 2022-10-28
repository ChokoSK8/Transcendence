import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUsers(): {
        name: string;
        email: string;
    };
    store(createUserDto: CreateUserDto): CreateUserDto;
    update(updateUserDto: UpdateUserDto, userId: number): {
        updateUserDto: UpdateUserDto;
        userId: number;
    };
    getUser(userId: number): {
        userId: number;
    };
    deleteUser(userId: number): {
        userId: number;
    };
}
