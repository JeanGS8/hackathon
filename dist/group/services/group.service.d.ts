import { DeleteResult, Repository } from "typeorm";
import { Group } from "../entities/group.entities";
export declare class GroupService {
    private groupRepository;
    constructor(groupRepository: Repository<Group>);
    findAll(): Promise<Group[]>;
    findById(id: number): Promise<Group>;
    findByGroup(group: string): Promise<Group>;
    create(group: Group): Promise<Group>;
    update(group: Group): Promise<Group>;
    delete(id: number): Promise<DeleteResult>;
}
