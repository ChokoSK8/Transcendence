import { NestFactory } from '@nestjs/core';
import { nestFirstModule } from './nestFirst.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(nestFirstModule);
	
	// initialize Swagger which document our API
	const config = new DocumentBuilder()
    .setTitle('Median')
    .setDescription('The Median API description')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

	// In order to use ValidationPipe everywhere
	// whitelist used to strip out unvalided parameters
  app.useGlobalPipes(new ValidationPipe({whitelist: true}));
  await app.listen(3001);
}
bootstrap();
