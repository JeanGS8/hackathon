import { IsNotEmpty } from "class-validator";
import { Group } from "../../group/entities/group.entities";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tb_classes'})
export class Classes{
    @PrimaryGeneratedColumn()
    public id: number;

    @IsNotEmpty()
    @Column({length: 500})
    public description: string;

    @IsNotEmpty()
    @Column({type: 'boolean'})
    public isActive: boolean;

    @OneToMany(() => Group, (group) => group.classes)
    group: Group[];
}
