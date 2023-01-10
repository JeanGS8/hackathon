import { ProjectService } from "../services/project.service";
import { Project } from "../entities/project.entities";
export declare class ProjectController {
    private readonly projectService;
    constructor(projectService: ProjectService);
    findAll(): Promise<Project[]>;
    findById(id: number): Promise<Project>;
    findByProject(project: string): Promise<Project>;
    create(project: Project): Promise<Project>;
    update(project: Project): Promise<Project>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
