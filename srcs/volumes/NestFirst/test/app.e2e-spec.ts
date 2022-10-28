import { Test } from '@nestjs/testing';
import { nestFirstModule } from '../src/nestFirst.module';

describe('App e2e', () => {
	beforeAll(async () => {
		const moduleRef = 
			await Test.createTestingModule({
				imports: [nestFirstModule],
			}).compile();

		const app = moduleRef.createNestApplication();
	});
	it.todo('should pass');
});
