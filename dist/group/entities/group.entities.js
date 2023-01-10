"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = void 0;
const class_validator_1 = require("class-validator");
const classes_entities_1 = require("../../class/entities/classes.entities");
const project_entities_1 = require("../../project/entities/project.entities");
const typeorm_1 = require("typeorm");
let Group = class Group {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Group.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Group.prototype, "groupNumber", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)({ length: 500 }),
    __metadata("design:type", String)
], Group.prototype, "moreInfos", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => project_entities_1.Project, (project) => project.group),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", project_entities_1.Project)
], Group.prototype, "project", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => classes_entities_1.Classes, (classes) => classes.group, {
        onDelete: "CASCADE"
    }),
    __metadata("design:type", classes_entities_1.Classes)
], Group.prototype, "classes", void 0);
Group = __decorate([
    (0, typeorm_1.Entity)({ name: 'tb_group' })
], Group);
exports.Group = Group;
//# sourceMappingURL=group.entities.js.map