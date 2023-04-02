import { Module } from '@nestjs/common';
import { ClienteController } from './cliente.controller';
import { ClienteService } from './cliente.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './cliente.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    ssl: false,
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'secret',
    port: 5432,
    entities: [Cliente],
    synchronize: true,
  }), TypeOrmModule.forFeature([Cliente]) ],
  controllers: [ClienteController],
  providers: [ClienteService]
})
export class ClienteModule {}
