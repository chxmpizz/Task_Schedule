import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';
import { ScheduleModule } from './schedule/schedule.module';
import { ClientModule } from './client/client.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), UserModule, TaskModule, ScheduleModule, ClientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
