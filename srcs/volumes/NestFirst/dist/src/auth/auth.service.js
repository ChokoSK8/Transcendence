"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const prisma_service_1 = require("../prisma/prisma.service");
const argon = require("argon2");
let AuthService = class AuthService {
    constructor(prismaService, jwtService, configService) {
        this.prismaService = prismaService;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async signup(authDto) {
        const hash = await argon.hash(authDto.password);
        try {
            const user = await this.prismaService.user.create({
                data: {
                    email: authDto.email,
                    hashPwd: hash,
                },
            });
            return (this.signToken(user.id, user.email));
        }
        catch (error) {
            if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new common_1.ForbiddenException('Credentials taken');
                }
            }
            throw (error);
        }
    }
    async signin(authDto) {
        const user = await this.prismaService.user.findUnique({
            where: {
                email: authDto.email,
            },
        });
        if (!user)
            throw new common_1.ForbiddenException('Credentials incorrect');
        const pwMatches = await argon.verify(user.hashPwd, authDto.password);
        if (!pwMatches)
            throw new common_1.ForbiddenException('Credentials incorrect');
        return (this.signToken(user.id, user.email));
    }
    async signToken(userId, email) {
        const payload = { sub: userId, email };
        const token = await this.jwtService.signAsync(payload, {
            expiresIn: '15m',
            secret: this.configService.get('JWT_SECRET')
        });
        return ({
            access_token: token,
        });
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map