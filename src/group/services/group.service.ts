import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Group } from "../entities/group.entities";

@Injectable()
export class GroupService{
    constructor(
        @InjectRepository(Group)
        private groupRepository: Repository<Group>

    ){}

    async findAll(): Promise<Group[]>{
        return await this.groupRepository.find({
             relations: {
                classes: true,
                project: true
            }
        });
    }

    async findById(id: number): Promise<Group>{
        let groupSearch = await this.groupRepository.findOne({
            where: {
                id
            },
            relations: {
                classes: true,
                project: true
            }
            
        });
        if(!groupSearch)
            throw new HttpException('Group not found', HttpStatus.NOT_FOUND)
        return groupSearch;
    }

    async findByGroup(group: string): Promise<Group>{
        return await this.groupRepository.findOne({
            where: {
                groupNumber: ILike(`%${group}%`)
                //TODO: discutir typagem
            },
            relations: {
                classes: true,
                project: true
            }
        });
    }

    async create(group: Group): Promise<Group>{
        return await this.groupRepository.save(group);
    }

    async update(group: Group): Promise<Group>{
        let groupUpdate: Group = await this.findById(group.id)

        if(!groupUpdate)
            throw new HttpException('Group not found!', HttpStatus.NOT_FOUND);

        return await this.groupRepository.save(group);
    }

    async delete (id: number): Promise<DeleteResult>{
        let groupSearch = await this.findById(id);

        if(!groupSearch)
            throw new HttpException('Group not found', HttpStatus.NOT_FOUND);
        return await this.groupRepository.delete(id);
    }

}