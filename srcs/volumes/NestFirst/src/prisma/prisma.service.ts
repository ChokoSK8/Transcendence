import { Injectable, INestApplication } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ConfigService} from '@nestjs/config';

//@Injectable is use to allowed dependencies injections
@Injectable()
export class PrismaService extends PrismaClient {

	// definition needed to ensure shuts down gracefully
	async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
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
