import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  createUser(createUserDto: CreateUserDto) {
    const newUsers = new this.userModel(createUserDto);
    return newUsers.save();
  }

  findAllUser() {
    return this.userModel.find();
  }

  findOneUser(id: string) {
    return this.userModel.findById(id);
  }

  updateUser(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(id, updateUserDto);
  }

  removeUser(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }
}
