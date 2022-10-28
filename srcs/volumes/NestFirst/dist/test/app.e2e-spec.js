"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const nestFirst_module_1 = require("../src/nestFirst.module");
describe('App e2e', () => {
    beforeAll(async () => {
        const moduleRef = await testing_1.Test.createTestingModule({
            imports: [nestFirst_module_1.nestFirstModule],
        }).compile();
        const app = moduleRef.createNestApplication();
    });
    it.todo('should pass');
});
//# sourceMappingURL=app.e2e-spec.js.map