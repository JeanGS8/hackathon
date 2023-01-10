import { Classes } from "../../class/entities/classes.entities";
import { Project } from "../../project/entities/project.entities";
export declare class Group {
    id: number;
    groupNumber: string;
    moreInfos: string;
    project: Project;
    classes: Classes;
}
