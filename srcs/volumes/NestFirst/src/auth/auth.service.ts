import { Injectable, Req, ForbiddenException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { ConfigService} from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';
import { Request } from 'express';
import { AuthDto } from './dto/auth.dto';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
	constructor(
		private prismaService: PrismaService,
		private jwtService: JwtService,
		private configService: ConfigService
		) {}

	async signup(authDto: AuthDto) {

		// hash the pwd with argon2 with async function
		const hash = await argon.hash(authDto.password);

		// because email @isunique we need to catch the prisma error
		try {
			// create user in the db
			// user is from the prisma.schema and data are User properties
			const user = await this.prismaService.user.create({
				data: {
					email: authDto.email,
					hashPwd: hash,
				},
			});
			return (this.signToken(user.id, user.email));
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				// P2002 is the unique error
				if (error.code === 'P2002') {
					throw new ForbiddenException('Credentials taken');
				}
			}
			throw (error);
		}
	}

	async signin(authDto: AuthDto) {

		//findUnique usable with @id and @unique parameter
		const user = await this.prismaService.user.findUnique({
			where: {
				email: authDto.email,
			},
		});

		if (!user)
			throw new ForbiddenException('Credentials incorrect');

		const pwMatches = await argon.verify(user.hashPwd, authDto.password)

		if (!pwMatches)
			throw new ForbiddenException('Credentials incorrect');
		return (this.signToken(user.id, user.email));
	}

	// returning a token containing the id and email of the user
	// that way no one can pretends to be someone else
	async signToken(userId: number, email: string): Promise<{ access_token: string }> {
		const payload = { sub:userId, email };
		const token = await this.jwtService.signAsync(
			payload,
			{
				expiresIn: '15m',
				secret: this.configService.get<string>('JWT_SECRET')
			}
		);
		return ({
			access_token: token,
		});
	}
}
