import {
  IsString,
  IsOptional,
  IsEnum,
  IsDateString,
  IsArray,
  IsMongoId,
  IsNotEmpty,
} from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  Title: string;

  @IsOptional()
  @IsString()
  Description?: string;

  @IsOptional()
  @IsEnum(['todo', 'in progress', 'done'])
  Status?: 'todo' | 'in progress' | 'done';

  @IsOptional()
  @IsEnum(['High', 'Medium', 'Low'])
  Priority?: 'High' | 'Medium' | 'Low';

  @IsOptional()
  @IsDateString()
  Start_Date?: string;

  @IsOptional()
  @IsDateString()
  Due_Date?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  Tags?: string[];

  @IsMongoId()
  UserId: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  Category?: string[];
}
