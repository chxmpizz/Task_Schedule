import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ClientDocument = Client & Document;

@Schema({ timestamps: true })
export class Client {
  @Prop({
    type: Types.ObjectId,
    ref: 'User',
    required: true,
  })
  UserId: Types.ObjectId;

  @Prop({
    type: Date,
    default: Date.now,
    required: true,
  })
  Appointment_date: Date;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
