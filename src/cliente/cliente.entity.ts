import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cliente {
    @PrimaryGeneratedColumn()
    codCliente: number;
    @Column()
    nombre: string;
    @Column()
    apellido: string;
    @Column()
    numCedula: string;
    @Column()
    tipoCanal: string;


}