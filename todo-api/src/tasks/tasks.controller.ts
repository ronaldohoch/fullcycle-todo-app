import { Body, Controller, Delete, Get, Param, Post, Patch, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { taskDTO } from './dto/tasks.dto';
import { Tasks } from './tasks.model';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('tasks')
export class TasksController {

    constructor(
        private readonly tasksSvc: TasksService
    ){}

    @Get()
    async findAll(): Promise<Tasks[]>{
        return await this.tasksSvc.findAll()
    }

    @Get(':id')
    async findAllByUser(@Param('id') userId): Promise<Tasks[]>{
        return await this.tasksSvc.findByUser(userId)
    }

    @Post()
    async create(@Body() task:taskDTO){
        return await this.tasksSvc.create(task)
    }

    @UseGuards(AuthGuard)
    @Patch(":id")
    async setAsDone(@Param('id') taskId){
        let userId = 'pega do jwt'
        return await this.tasksSvc.setAsDone(taskId, userId, true);
    }

    @Delete(":id")
    async remove(@Param('id') id: string){
        return await this.tasksSvc.deleteOne(id);
    }
}
