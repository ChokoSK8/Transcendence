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
const nestFirst_controller_1 = require("./nestFirst.controller");
const user_module_1 = require("./user/user.module");
const auth_module_1 = require("./auth/auth.module");
const bookmark_module_1 = require("./bookmark/bookmark.module");
const prisma_module_1 = require("./prisma/prisma.module");
const config_1 = require("@nestjs/config");
let nestFirstModule = class nestFirstModule {
};
nestFirstModule = __decorate([
    (0, common_1.Module)({
        controllers: [nestFirst_controller_1.nestFirstCtrl],
        imports: [user_module_1.UserModule,
            auth_module_1.AuthModule,
            bookmark_module_1.BookmarkModule,
            prisma_module_1.PrismaModule,
            config_1.ConfigModule.forRoot({ isGlobal: true, })
        ],
    })
], nestFirstModule);
exports.nestFirstModule = nestFirstModule;
;
//# sourceMappingURL=nestFirst.module.js.map