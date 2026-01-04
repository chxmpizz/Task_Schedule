import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  createUser(createUserDto: CreateUserDto): Promise<User> {
    const newUsers = new this.userModel(createUserDto);
    return newUsers.save();
  }

  async findAllUser() {
    return await this.userModel.find().exec();
  }

  async findOneUser(id: string) {
    try {
      const result = await this.userModel.findById(id).exec();
      if (!result) {
        throw new NotFoundException(`User with ID ${id} not found`);
      }
      return result;
    } catch (error) {
      throw new InternalServerErrorException('User not found with ID.', error);
    }
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto) {
    return await this.userModel.findByIdAndUpdate(id, updateUserDto).exec();
  }

  async findByEmail(email: string): Promise<UserDocument> {
    try {
      const result = await this.userModel.findOne({ Email: email }).exec();
      if (!result) {
        throw new NotFoundException(`User with email ${email} not found`);
      }
      return result;
    } catch (error) {
      throw new InternalServerErrorException(
        'User not found with Email.',
        error,
      );
    }
  }

  async removeUser(id: string) {
    const result = await this.userModel.findByIdAndDelete(id).exec();
    try {
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      if (!result) {
        throw new NotFoundException(`User with ID ${id} not found`);
      }
      return { message: 'User deleted successfully' };
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      throw new InternalServerErrorException(
        'An error occurred during deletion',
      );
    }
  }
}
