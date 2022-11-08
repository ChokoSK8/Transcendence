"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.nestFirstModule = void 0;
const common_1 = require("@nestjs/common");
const logger_middleware_1 = require("./middleware/logger.middleware");
const nestFirst_controller_1 = require("./nestFirst.controller");
const auth_module_1 = require("./auth/auth.module");
const bookmark_module_1 = require("./bookmark/bookmark.module");
const prisma_module_1 = require("./prisma/prisma.module");
const config_1 = require("@nestjs/config");
const users_module_1 = require("./users/users.module");
const chat_module_1 = require("./chat/chat.module");
let nestFirstModule = class nestFirstModule {
    configure(consumer) {
        consumer
            .apply(logger_middleware_1.LoggerMiddleware)
            .exclude({ path: 'users', method: common_1.RequestMethod.POST })
            .forRoutes({ path: 'users', method: common_1.RequestMethod.ALL });
    }
};
nestFirstModule = __decorate([
    (0, common_1.Module)({
        controllers: [nestFirst_controller_1.nestFirstCtrl],
        imports: [
            auth_module_1.AuthModule,
            bookmark_module_1.BookmarkModule,
            prisma_module_1.PrismaModule,
            config_1.ConfigModule.forRoot({ isGlobal: true, }),
            users_module_1.UsersModule,
            chat_module_1.ChatModule
        ],
    })
], nestFirstModule);
exports.nestFirstModule = nestFirstModule;
//# sourceMappingURL=nestFirst.module.js.map