import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { GroupService } from "../services/group.service";
import { Group } from "../entities/group.entities";

@Controller('/group')
export class GroupController{
    constructor (private readonly groupService: GroupService){}

    @Get('/all')
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Group[]>{
        return this.groupService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(
        @Param('id', ParseIntPipe)
        id: number
    ): Promise<Group>{
        return this.groupService.findById(id);
    }

    @Get('group/:group')
    @HttpCode(HttpStatus.OK)
    findByGroup(
        @Param('group')group: string): Promise<Group>{
            return this.groupService.findByGroup(group);
    }

    @Post('/register')
    @HttpCode(HttpStatus.OK)
    create(
        @Body()
        group: Group
    ): Promise<Group>{
        return this.groupService.create(group);
    }

    @Put('/update')
    @HttpCode(HttpStatus.OK)
    update(
        @Body()
        group: Group
    ): Promise<Group>{
        return this.groupService.update(group);
    }
    
    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(
        @Param('id', ParseIntPipe)
        id: number
    ){
        return this.groupService.delete(id);
    }
}