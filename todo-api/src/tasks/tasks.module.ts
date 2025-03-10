import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { UsersModel } from 'src/users/users.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports:[
    SequelizeModule.forFeature([TasksModule])
  ],
  providers: [TasksService],
  controllers: [TasksController]
})
export class TasksModule {}
