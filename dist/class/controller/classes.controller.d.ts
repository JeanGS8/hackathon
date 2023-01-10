import { ClassesService } from "../services/classes.service";
import { Classes } from "../entities/classes.entities";
export declare class ClassesController {
    private readonly classesService;
    constructor(classesService: ClassesService);
    findAll(): Promise<Classes[]>;
    create(classes: Classes): Promise<Classes>;
    update(classes: Classes): Promise<Classes>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
