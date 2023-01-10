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
exports.GroupService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const group_entities_1 = require("../entities/group.entities");
let GroupService = class GroupService {
    constructor(groupRepository) {
        this.groupRepository = groupRepository;
    }
    async findAll() {
        return await this.groupRepository.find({
            relations: {
                classes: true,
                project: true
            }
        });
    }
    async findById(id) {
        let groupSearch = await this.groupRepository.findOne({
            where: {
                id
            },
            relations: {
                classes: true,
                project: true
            }
        });
        if (!groupSearch)
            throw new common_1.HttpException('Group not found', common_1.HttpStatus.NOT_FOUND);
        return groupSearch;
    }
    async findByGroup(group) {
        return await this.groupRepository.findOne({
            where: {
                groupNumber: (0, typeorm_2.ILike)(`%${group}%`)
            },
            relations: {
                classes: true,
                project: true
            }
        });
    }
    async create(group) {
        return await this.groupRepository.save(group);
    }
    async update(group) {
        let groupUpdate = await this.findById(group.id);
        if (!groupUpdate)
            throw new common_1.HttpException('Group not found!', common_1.HttpStatus.NOT_FOUND);
        return await this.groupRepository.save(group);
    }
    async delete(id) {
        let groupSearch = await this.findById(id);
        if (!groupSearch)
            throw new common_1.HttpException('Group not found', common_1.HttpStatus.NOT_FOUND);
        return await this.groupRepository.delete(id);
    }
};
GroupService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(group_entities_1.Group)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GroupService);
exports.GroupService = GroupService;
//# sourceMappingURL=group.service.js.map