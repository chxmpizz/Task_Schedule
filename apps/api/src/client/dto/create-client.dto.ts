import { IsMongoId, IsDateString } from 'class-validator';

export class CreateClientDto {
  @IsMongoId()
  UserId: string;

  @IsDateString()
  Appointment_date: string;
}
