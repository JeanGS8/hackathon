import { IsNotEmpty } from "class-validator";
import { Group } from "../../group/entities/group.entities"
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tb_projects'})
export class Project{

    @PrimaryGeneratedColumn()
    public id: number;

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    public projectName: string;

    @IsNotEmpty()
    @Column({nullable: false})
    public projectLink: string;

    @Column({length: 5000})
    public projectLogo: string;

    @Column({length: 500})
    public projectPit: string;

    @OneToOne(() => Group, (group) => group.project,{
        onDelete: 'CASCADE'
    })
    group: Group;

}