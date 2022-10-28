import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';
export declare class AuthService {
    private prismaService;
    private jwtService;
    private configService;
    constructor(prismaService: PrismaService, jwtService: JwtService, configService: ConfigService);
    signup(authDto: AuthDto): Promise<{
        access_token: string;
    }>;
    signin(authDto: AuthDto): Promise<{
        access_token: string;
    }>;
    signToken(userId: number, email: string): Promise<{
        access_token: string;
    }>;
}
