/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import {
  IsString,
  IsEmail,
  IsOptional,
  IsNumber,
  Min,
  Max,
  IsNotEmpty,
  IsEnum,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  Name: string;

  @IsEmail()
  Email: string;

  @IsString()
  @IsNotEmpty()
  Password: string;

  @IsOptional()
  @IsString()
  Profile_Img?: string;

  @IsString()
  @IsNotEmpty()
  Occupation: string;

  @IsOptional()
  @IsString()
  house_Number?: string;

  @IsOptional()
  @IsString()
  street?: string;

  @IsOptional()
  @IsString()
  subDistrict?: string;

  @IsOptional()
  @IsString()
  district?: string;

  @IsOptional()
  @IsString()
  province?: string;

  @IsNumber()
  @Min(1)
  @Max(120)
  Age: number;

  @IsString()
  @IsNotEmpty()
  Phone: string;

  @IsString()
  @IsEnum(['User', 'Freelancer'])
  Role: 'User' | 'Freelancer';
}
