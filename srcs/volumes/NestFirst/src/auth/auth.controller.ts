import { Controller, Post, Body, HttpStatus, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@Post('signup')
	signup(@Body() authDto: AuthDto) {
		return (this.authService.signup(authDto));
	}

	// returning 200 instead of 201 because 201 is when we create something
	@HttpCode(HttpStatus.OK)
	@Post('signin')
	signin(@Body() authDto: AuthDto) {
		return (this.authService.signin(authDto));
	}
}