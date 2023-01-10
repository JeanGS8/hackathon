import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Group } from "./entities/group.entities";
import { GroupService } from "./services/group.service";
import { GroupController } from "./controllers/group.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Group])],
    providers: [GroupService],
    controllers: [GroupController],
    exports: [TypeOrmModule]
})
export class GroupModule {}