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
  @Prop({ required: false, trim: true })
  Name: string;

  @Prop({
    required: false,
    unique: true,
    trim: true,
    lowercase: true,
  })
  Email: string;
  // ปรับ Password ให้ไม่บังคับ เพราะ Google Login ไม่มีรหัสผ่าน
  @Prop({ required: false, trim: true })
  Password?: string;

  @Prop({ required: false, trim: true })
  Profile_Img?: string;

  // ปรับ Occupation ให้ไม่บังคับ
  @Prop({ required: false, trim: true })
  Occupation?: string;

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

  // ปรับ Age ให้ไม่บังคับ
  @Prop({ required: false })
  Age?: number;

  // ปรับ Phone ให้ไม่บังคับ
  @Prop({ required: false, trim: true })
  Phone?: string;

  @Prop({
    type: String,
    enum: ['User', 'Freelancer'],
    default: 'User',
  })
  Role: 'User' | 'Freelancer';

  @Prop({
    required: false,
  })
  Google_id?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre('save', async function () {
  if (this.isModified('Password')) {
    this.Password = await bcrypt.hash(this.Password, 10);
  }
});
