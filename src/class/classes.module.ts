import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Classes } from "./entities/classes.entities";
import { ClassesService } from "./services/classes.service";
import { ClassesController } from "./controller/classes.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Classes])],
    providers: [ClassesService],
    controllers: [ClassesController],
    exports: [TypeOrmModule]
})
export class ClassesModule {}