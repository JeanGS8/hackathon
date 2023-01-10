import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ClassesService } from "../services/classes.service";
import { Classes } from "../entities/classes.entities";

@Controller('/class')
export class ClassesController{
    constructor (private readonly classesService: ClassesService){}

    @Get('/all')
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Classes[]>{
        return this.classesService.findAll();
    }

    @Post('/register')
    @HttpCode(HttpStatus.OK)
    create(
        @Body()
        classes: Classes
    ): Promise<Classes>{
        return this.classesService.create(classes);
    }

    @Put('/update')
    @HttpCode(HttpStatus.OK)
    update(
        @Body()
        classes: Classes
    ): Promise<Classes>{
        return this.classesService.update(classes);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(
        @Param('id', ParseIntPipe)
        id: number
    ){
        return this.classesService.delete(id);
    }
}