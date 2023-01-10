"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const classes_entities_1 = require("./entities/classes.entities");
const classes_service_1 = require("./services/classes.service");
const classes_controller_1 = require("./controller/classes.controller");
let ClassesModule = class ClassesModule {
};
ClassesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([classes_entities_1.Classes])],
        providers: [classes_service_1.ClassesService],
        controllers: [classes_controller_1.ClassesController],
        exports: [typeorm_1.TypeOrmModule]
    })
], ClassesModule);
exports.ClassesModule = ClassesModule;
//# sourceMappingURL=classes.module.js.map