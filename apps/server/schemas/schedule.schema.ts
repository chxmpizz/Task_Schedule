import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ScheduleDocument = Schedule & Document;

@Schema({ timestamps: true })
export class Schedule {
  @Prop({
    type: String,
    default: 'Schedule Topic',
    trim: false,
  })
  Topic?: string;

  @Prop({
    type: Date,
    default: Date.now,
    required: true,
  })
  Schedule_date: Date;

  @Prop({
    type: Types.ObjectId,
    ref: 'User',
    required: true,
  })
  OwnerId: Types.ObjectId;

  @Prop({
    type: Types.ObjectId,
    ref: 'Client',
    required: true,
  })
  ClientId: Types.ObjectId;

  @Prop({
    type: String,
    enum: ['High', 'Medium', 'Low'],
    default: 'Low',
    required: true,
  })
  Priority: 'High' | 'Medium' | 'Low';

  @Prop({
    type: String,
    enum: ['pending', 'confirmed', 'cancelled', 'done'],
    default: 'pending',
  })
  Status: 'pending' | 'confirmed' | 'cancelled' | 'done';

  @Prop({
    type: String,
    required: true,
    trim: false,
  })
  Locate: string;

  @Prop({
    type: Types.ObjectId,
    ref: 'Task',
    required: true,
  })
  Related_Task: Types.ObjectId;
}

export const ScheduleSchema = SchemaFactory.createForClass(Schedule);
