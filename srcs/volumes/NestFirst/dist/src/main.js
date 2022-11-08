"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const nestFirst_module_1 = require("./nestFirst.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(nestFirst_module_1.nestFirstModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Median')
        .setDescription('The Median API description')
        .setVersion('0.1')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true }));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map