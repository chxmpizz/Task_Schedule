import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type TaskDocument = Task & Document;

@Schema({ timestamps: true })
export class Task {
  @Prop({ required: true, trim: true })
  title: string;

  @Prop({ required: false, trim: true })
  Description?: string;

  @Prop({
    type: String,
    enum: ['todo', 'in progress', 'done'],
    default: 'todo',
    required: true,
  })
  Status: 'todo' | 'in progress' | 'done';

  @Prop({
    type: String,
    enum: ['High', 'Medium', 'Low'],
    default: 'Low',
    required: true,
  })
  Priority: 'High' | 'Medium' | 'Low';

  @Prop({ type: Date, default: Date.now, required: true })
  Start_Date: Date;

  @Prop({ type: Date, default: Date.now, required: true })
  Due_Date: Date;

  @Prop({ type: [String], default: [] })
  Tags: string[];

  @Prop({
    type: Types.ObjectId,
    ref: 'User',
    required: true,
  })
  UserId: Types.ObjectId;

  @Prop({ type: [String], required: false })
  Category?: string[];
}

export const TaskSchema = SchemaFactory.createForClass(Task);
