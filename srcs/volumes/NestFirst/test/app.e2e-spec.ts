import { Test, INestApplication } from '@nestjs/testing';
import { nestFirstModule } from '../src/nestFirst.module';
import { ValidationPipe } from '@nestjs/common';

describe('App e2e', () => {
	let	app: INestApplication;

	beforeAll(async () => {
		// easiest way to instanciate a module, here a nestFirstModule
		const moduleRef = 
			await Test.createTestingModule({
				imports: [nestFirstModule],
			}).compile();

		// create a app that emulates our application
		app = moduleRef.createNestApplication();
		app.useGlobalPipes(new ValidationPipe({whitelist: true}));
	});
	it.todo('should pass');
});
