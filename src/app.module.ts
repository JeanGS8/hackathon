import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './project/entities/project.entities';
import { ProjectModule } from './project/project.module';
import { GroupModule } from './group/group.module';
import { Group } from './group/entities/group.entities';
import { Classes } from './class/entities/classes.entities';
import { ClassesModule } from './class/classes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_hackathon',
      entities: [Project, Group, Classes],
      synchronize: true
    }),
    ProjectModule, GroupModule, ClassesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
