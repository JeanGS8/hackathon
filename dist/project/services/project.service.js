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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const project_entities_1 = require("../entities/project.entities");
const typeorm_2 = require("typeorm");
let ProjectService = class ProjectService {
    constructor(projectRepository) {
        this.projectRepository = projectRepository;
    }
    async findAll() {
        return await this.projectRepository.find({
            relations: {
                group: true
            }
        });
    }
    async findById(id) {
        let projectSearch = await this.projectRepository.findOne({
            where: {
                id
            },
            relations: {
                group: true
            }
        });
        if (!projectSearch)
            throw new common_1.HttpException('Project not found', common_1.HttpStatus.NOT_FOUND);
        return projectSearch;
    }
    async findByProject(project) {
        return await this.projectRepository.findOne({
            where: {
                projectName: (0, typeorm_2.ILike)(`%${project}%`)
            },
            relations: {
                group: true
            }
        });
    }
    async create(project) {
        return await this.projectRepository.save(project);
    }
    async update(project) {
        let updateProject = await this.findById(project.id);
        if (!updateProject)
            throw new common_1.HttpException('Project not found!', common_1.HttpStatus.NOT_FOUND);
        return await this.projectRepository.save(project);
    }
    async delete(id) {
        let projectSearch = await this.findById(id);
        if (!projectSearch)
            throw new common_1.HttpException('Project not found', common_1.HttpStatus.NOT_FOUND);
        return await this.projectRepository.delete(id);
    }
};
ProjectService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(project_entities_1.Project)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProjectService);
exports.ProjectService = ProjectService;
//# sourceMappingURL=project.service.js.map