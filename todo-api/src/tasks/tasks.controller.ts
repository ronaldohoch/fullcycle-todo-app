import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { taskDTO } from './dto/tasks.dto';
import { Tasks } from './tasks.model';

@Controller('tasks')
export class TasksController {

    constructor(
        private readonly tasksSvc: TasksService
    ){}

    @Get()
    async findAll(): Promise<Tasks[]>{
        return await this.tasksSvc.findAll()
    }
}
