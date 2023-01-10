import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { Classes } from "../entities/classes.entities";

@Injectable()
export class ClassesService{
    constructor(
        @InjectRepository(Classes)
        private classesRepository: Repository<Classes>

    ){}

    async findAll(): Promise<Classes[]>{
        return await this.classesRepository.find({
            relations: {
                group: true
            }
        });
    }

    async findById(id: number): Promise<Classes>{
        let classSearch = await this.classesRepository.findOne({
            where: {
                id
            },
            relations: {
                group: true
            }
            
        });
        if(!classSearch)
            throw new HttpException('class not found', HttpStatus.NOT_FOUND)
        return classSearch;
    }


    async create(classes: Classes): Promise<Classes>{
        return this.classesRepository.save(classes);
    }

    async update(classes: Classes): Promise<Classes>{
        let classUpdate: Classes = await this.findById(classes.id)

        if(!classUpdate)
            throw new HttpException('Class not found!', HttpStatus.NOT_FOUND);

        return await this.classesRepository.save(classes);
    }
    
    async delete (id: number): Promise<DeleteResult>{
        let classSearch = await this.findById(id);

        if(!classSearch)
            throw new HttpException('Class not found', HttpStatus.NOT_FOUND);
        return await this.classesRepository.delete(id);
    }

}