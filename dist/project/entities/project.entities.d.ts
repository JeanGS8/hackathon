import { Group } from "../../group/entities/group.entities";
export declare class Project {
    id: number;
    projectName: string;
    projectLink: string;
    projectLogo: string;
    projectPit: string;
    group: Group;
}
