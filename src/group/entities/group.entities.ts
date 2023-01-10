import { IsNotEmpty } from "class-validator";
import { Classes } from "../../class/entities/classes.entities";
import { Project } from "../../project/entities/project.entities";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tb_group'})
export class Group{
    @PrimaryGeneratedColumn()
    public id: number;

    @IsNotEmpty()
    @Column({nullable: false})
    public groupNumber: string;

    @IsNotEmpty()
    @Column({length: 500})
    public moreInfos: string;

    @OneToOne(() => Project, (project) => project.group)
    @JoinColumn()
    project: Project;

    @ManyToOne(() => Classes, (classes) => classes.group,{
        onDelete: "CASCADE"
    })
    classes: Classes;
}
