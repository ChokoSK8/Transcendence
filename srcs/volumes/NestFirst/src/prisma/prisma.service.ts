import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ConfigService} from '@nestjs/config';

//@Injectable is use to allowed dependencies injections
@Injectable()
export class PrismaService extends PrismaClient {
	constructor(configService: ConfigService) {
		super({
			datasources: {
				db: {
					url: configService.get<string>('DATABASE_URL')
				},
			},
		});
	}
}