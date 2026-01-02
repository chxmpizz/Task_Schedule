import {
  IsString,
  IsOptional,
  IsEnum,
  IsDateString,
  IsMongoId,
  IsNotEmpty,
} from 'class-validator';

export class CreateScheduleDto {
  @IsOptional()
  @IsString()
  Topic?: string;

  @IsOptional()
  @IsDateString()
  Schedule_date?: string;

  @IsMongoId()
  OwnerId: string;

  @IsMongoId()
  ClientId: string;

  @IsOptional()
  @IsEnum(['High', 'Medium', 'Low'])
  Priority?: 'High' | 'Medium' | 'Low';

  @IsOptional()
  @IsEnum(['pending', 'confirmed', 'cancelled', 'done'])
  Status?: 'pending' | 'confirmed' | 'cancelled' | 'done';

  @IsString()
  @IsNotEmpty()
  Locate: string;

  @IsMongoId()
  Related_Task: string;
}
