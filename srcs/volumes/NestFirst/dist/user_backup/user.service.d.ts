import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserService {
    getMe(): string;
    create(createUserDto: CreateUserDto): CreateUserDto;
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
