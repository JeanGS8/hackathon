import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Project } from "../entities/project.entities";
import { DeleteResult, ILike, Repository } from "typeorm";

@Injectable()
export class ProjectService{
    constructor(
        @InjectRepository(Project)
        private projectRepository: Repository<Project>

    ){}

    async findAll(): Promise<Project[]>{
        return await this.projectRepository.find({
            relations: {
                group: true
            }
        });
    }

    async findById(id: number): Promise<Project>{
        let projectSearch = await this.projectRepository.findOne({
            where: {
                id
            },
            relations: {
                group: true
            }
        });
        if(!projectSearch)
            throw new HttpException('Project not found', HttpStatus.NOT_FOUND)
        return projectSearch;
    }

    async findByProject(project: string): Promise<Project>{
        return await this.projectRepository.findOne({
            where: {
                projectName: ILike(`%${project}%`)
            },
            relations: {
                group: true
            }
        });
    }

    async create(project: Project): Promise<Project>{
        return await this.projectRepository.save(project);
    }

    async update(project: Project): Promise<Project>{
        let updateProject: Project = await this.findById(project.id)

        if(!updateProject)
            throw new HttpException('Project not found!', HttpStatus.NOT_FOUND);

        return await this.projectRepository.save(project);
    }

    async delete (id: number): Promise<DeleteResult>{
        let projectSearch = await this.findById(id);

        if(!projectSearch)
            throw new HttpException('Project not found', HttpStatus.NOT_FOUND);
        return await this.projectRepository.delete(id);
    }
}