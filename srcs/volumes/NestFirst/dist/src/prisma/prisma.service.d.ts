import { INestApplication } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ConfigService } from '@nestjs/config';
export declare class PrismaService extends PrismaClient {
    enableShutdownHooks(app: INestApplication): Promise<void>;
    constructor(configService: ConfigService);
}
