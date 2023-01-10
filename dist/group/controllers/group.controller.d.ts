import { GroupService } from "../services/group.service";
import { Group } from "../entities/group.entities";
export declare class GroupController {
    private readonly groupService;
    constructor(groupService: GroupService);
    findAll(): Promise<Group[]>;
    findById(id: number): Promise<Group>;
    findByGroup(group: string): Promise<Group>;
    create(group: Group): Promise<Group>;
    update(group: Group): Promise<Group>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
