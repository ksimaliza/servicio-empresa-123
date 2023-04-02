import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from './cliente.entity';
import { ClienteDto } from './clientedto.dto';

@Injectable()
export class ClienteService {

    constructor(@InjectRepository(Cliente) private repo: Repository<Cliente>) { }

    crearCliente(clienteDto: ClienteDto) {
        const cliente = this.repo.create(clienteDto);
        return this.repo.save(cliente);
      }
}
