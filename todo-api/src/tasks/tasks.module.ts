import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { Tasks } from './tasks.model';

@Module({
  imports:[
    SequelizeModule.forFeature([Tasks])
  ],
  providers: [TasksService],
  controllers: [TasksController],
  exports: [TasksService]
})
export class TasksModule {}
