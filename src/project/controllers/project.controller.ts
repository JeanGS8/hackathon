import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ProjectService } from "../services/project.service";
import { Project } from "../entities/project.entities";


@Controller('/project')
export class ProjectController{
    constructor (private readonly projectService: ProjectService){}

    @Get('/all')
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Project[]>{
        return this.projectService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(
        @Param('id', ParseIntPipe)
        id: number
    ): Promise<Project>{
        return this.projectService.findById(id);
    }

    @Get('project/:project')
    @HttpCode(HttpStatus.OK)
    findByProject(
        @Param('project')project: string): Promise<Project>{
            return this.projectService.findByProject(project);
    }

    @Post('/register')
    @HttpCode(HttpStatus.OK)
    create(
        @Body()
        project: Project
    ): Promise<Project>{
        return this.projectService.create(project);
    }

    @Put('/update')
    @HttpCode(HttpStatus.OK)
    update(
        @Body()
        project: Project
    ): Promise<Project>{
        return this.projectService.update(project);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(
        @Param('id', ParseIntPipe)
        id: number
    ){
        return this.projectService.delete(id);
    }
}