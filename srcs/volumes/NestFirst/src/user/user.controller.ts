import { Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
@Controller('users')
export class UserController {

	// AuthGuard use the key 'jwt' specifies when instanciate JwtStrategy
	@UseGuards(AuthGuard('jwt'))
	@Get('me')
	getMe() {
		return ("user info");
	}
}
