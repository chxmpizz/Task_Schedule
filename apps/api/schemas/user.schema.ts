/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as bcrypt from 'bcrypt';

export type UserDocument = User & Document;

@Schema({
  timestamps: {
    createdAt: 'CreateAt',
    updatedAt: 'UpdateAt',
  },
})
export class User {
  @Prop({ required: true, trim: true })
  Name: string;

  @Prop({
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  })
  Email: string;

  @Prop({ required: true, trim: true })
  Password: string;

  @Prop({ required: false, trim: true })
  Profile_Img?: string;

  @Prop({ required: true, trim: true })
  Occupation: string;

  @Prop({ required: false, trim: true })
  house_Number?: string;

  @Prop({ required: false, trim: true })
  street?: string;

  @Prop({ required: false, trim: true })
  subDistrict?: string;

  @Prop({ required: false, trim: true })
  district?: string;

  @Prop({ required: false, trim: true })
  province?: string;

  @Prop({ required: true })
  Age: number;

  @Prop({ required: true, trim: true })
  Phone: string;

  @Prop({
    type: String,
    enum: ['User', 'Freelancer'],
    default: 'User',
  })
  Role: 'User' | 'Freelancer';
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre('save', async function () {
  if (this.isModified('Password')) {
    this.Password = await bcrypt.hash(this.Password, 10);
  }
});
