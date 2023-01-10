import { DeleteResult, Repository } from "typeorm";
import { Classes } from "../entities/classes.entities";
export declare class ClassesService {
    private classesRepository;
    constructor(classesRepository: Repository<Classes>);
    findAll(): Promise<Classes[]>;
    findById(id: number): Promise<Classes>;
    create(classes: Classes): Promise<Classes>;
    update(classes: Classes): Promise<Classes>;
    delete(id: number): Promise<DeleteResult>;
}
