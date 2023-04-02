import { Controller, Get, Post, Body, HttpCode } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteDto } from './clientedto.dto';

@Controller('cliente')
export class ClienteController {

    constructor(private clienteService: ClienteService) { }
    @Get()
    hola() {
        return 'HOLA EMPRESA 123'
    }

    @Post()
    addCliente(@Body() clienteDto: ClienteDto) {
        this.clienteService.crearCliente(clienteDto);
        console.log('Agregando cliente en la empresa 123');
        return HttpCode(200);
    }


}
