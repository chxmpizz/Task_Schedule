import { Injectable } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Schedule } from 'schemas/schedule.schema';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectModel(Schedule.name) private scheduleModel: Model<Schedule>,
  ) {}

  createSchedule(createScheduleDto: CreateScheduleDto) {
    const newSchedule = new this.scheduleModel(createScheduleDto);
    return newSchedule.save();
  }

  findAllSchedule() {
    return this.scheduleModel.find();
  }

  findOneSchedule(id: string) {
    return this.scheduleModel.findById(id);
  }

  updateSchedule(id: string, updateScheduleDto: UpdateScheduleDto) {
    return this.scheduleModel.findByIdAndUpdate(id, updateScheduleDto);
  }

  removeSchedule(id: string) {
    return this.scheduleModel.findByIdAndDelete(id);
  }
}
