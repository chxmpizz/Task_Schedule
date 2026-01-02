import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Client } from 'schemas/client.schema';

@Injectable()
export class ClientService {
  constructor(@InjectModel(Client.name) private clientModel: Model<Client>) {}
  createClient(createClientDto: CreateClientDto) {
    const newClient = new this.clientModel(createClientDto);
    return newClient.save();
  }

  findAllClients() {
    return this.clientModel.find();
  }

  findOneClient(id: string) {
    return this.clientModel.findById(id);
  }

  updateClient(id: string, updateClientDto: UpdateClientDto) {
    return this.clientModel.findByIdAndUpdate(id, updateClientDto);
  }

  removeClient(id: string) {
    return this.clientModel.findByIdAndDelete(id);
  }
}
