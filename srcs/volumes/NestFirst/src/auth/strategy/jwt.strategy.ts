import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
	
	constructor(private configService: ConfigService, private prismaService: PrismaService) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: configService.get<string>('JWT_SECRET'),
		});
	}

	async validate(payload: {sub: number, email: string}) {
		console.log({payload});

		const user = await this.prismaService.user.findUnique({
			where: {
				id: payload.sub,
			}
		});
		delete user.hashPwd;
		return (user);
	}
}
