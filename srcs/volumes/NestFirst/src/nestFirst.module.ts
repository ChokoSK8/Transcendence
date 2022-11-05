import { Module } from '@nestjs/common';
import { nestFirstCtrl } from './nestFirst.controller';
import { AuthModule } from './auth/auth.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { UsersModule } from './users/users.module';

@Module({
	controllers: [ nestFirstCtrl ],
	imports : [UserModule,
		AuthModule,
		BookmarkModule,
		PrismaModule,
		ConfigModule.forRoot({isGlobal: true,}),
		UsersModule
		],
})

export class nestFirstModule {};
