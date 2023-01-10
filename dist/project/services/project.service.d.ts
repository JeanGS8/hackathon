import { Project } from "../entities/project.entities";
import { DeleteResult, Repository } from "typeorm";
export declare class ProjectService {
    private projectRepository;
    constructor(projectRepository: Repository<Project>);
    findAll(): Promise<Project[]>;
    findById(id: number): Promise<Project>;
    findByProject(project: string): Promise<Project>;
    create(project: Project): Promise<Project>;
    update(project: Project): Promise<Project>;
    delete(id: number): Promise<DeleteResult>;
}
