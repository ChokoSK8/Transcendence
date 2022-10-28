import { NestFactory } from '@nestjs/core';
import { nestFirstModule } from './nestFirst.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(nestFirstModule);
	// In order to use ValidationPipe everywhere
	// whitelist used to strip out unvalided parameters
  app.useGlobalPipes(new ValidationPipe({whitelist: true}));
  await app.listen(3000);
}
bootstrap();
