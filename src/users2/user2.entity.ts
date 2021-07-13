import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User2{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    
}