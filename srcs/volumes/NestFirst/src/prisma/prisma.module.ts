import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ConfigModule } from '@nestjs/config';

@Global()
@Module({
	imports: [ConfigModule],
  providers: [PrismaService],
	//exports mean that modules which import that module have access to providers
	exports: [PrismaService]
})
export class PrismaModule {}
