import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { nestFirstCtrl } from './nestFirst.controller';
import { AuthModule } from './auth/auth.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { ChatModule } from './chat/chat.module';

@Module({
	controllers: [ nestFirstCtrl ],
	imports : [
		AuthModule,
		BookmarkModule,
		PrismaModule,
		ConfigModule.forRoot({isGlobal: true,}),
		UsersModule,
		ChatModule
		],
})

export class nestFirstModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer
			.apply(LoggerMiddleware)
			.exclude({path: 'users', method: RequestMethod.POST})
		// for every requests with users path
		//	.forRoutes('users');
		//	.forRoutes(UserController);
			.forRoutes({path: 'users', method: RequestMethod.ALL});
	}
}
