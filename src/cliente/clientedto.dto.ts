import { IsString } from "class-validator";
export class ClienteDto {
    @IsString()
    nombre: string

    @IsString()
    apellido: string

    @IsString()
    numCedula: string

    @IsString()
    tipoCanal: string
}