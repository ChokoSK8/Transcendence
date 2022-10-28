import { Controller, UseGuards, Get, Req } from '@nestjs/common';
import { User } from '@prisma/client';
import { JwtGuard } from '../auth/guard';
import { GetUser } from '../auth/decorator';

@Controller('users')
export class UserController {

	// AuthGuard use the key 'jwt' specifies when instanciate JwtStrategy
	@UseGuards(JwtGuard)
	@Get('me')
	getMe(@GetUser() user: User) {
		return (user);
	}
}
