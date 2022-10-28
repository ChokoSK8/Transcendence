import { Controller, Get, Post, Patch, Delete, Req, Param, Body, ParseIntPipe } from '@nestjs/common';
import { Request} from 'express';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')

export class UserController {

	constructor(private userService: UserService) {}

	@Get('me')
	getMe() {
		return (this.userService.getMe());
	}

	// means we are creating something
	@Post()
		store(@Body() createUserDto: CreateUserDto) {
			return (this.userService.create(createUserDto));
		}

	@Patch('/:userId')
		update(
		@Body() updateUserDto: UpdateUserDto,
		@Param('userId', ParseIntPipe) userId: number,
		){
			return (this.userService.update(updateUserDto, userId));
		}

	// :userId means that userId is dynamic data
	@Get('/:userId')
		// @Param is use to catch the userId
		// getUser(@Param() userIdParam: number) if we only have one param
		// getUser(@Param() param: { userId: number })
		getUser(@Param('userId', ParseIntPipe) userId: number) {
			return (this.userService.getUser(userId));
		}

	@Delete('/:userId')
		deleteUser(@Param('userId', ParseIntPipe) userId: number) {
			return (this.userService.deleteUser(userId));
		}
}
