import { Body, Controller, Delete, Get, Param, Post, Patch, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { taskDTO } from './dto/tasks.dto';
import { Tasks } from './tasks.model';
import { AuthGuard } from 'src/auth/auth.guard';
import { User } from 'src/_decorators/user.decorator';

@Controller('tasks')
export class TasksController {

    constructor(
        private readonly tasksSvc: TasksService
    ){}

    // @Get()
    // @UseGuards(AuthGuard)
    // async findAll(): Promise<Tasks[]>{
    //     return await this.tasksSvc.findAll()
    // }

    @Get()
    @UseGuards(AuthGuard) // if all routes are protected, you wan use the guard in the controller to avoid use the guard in each route
    async findAll(@User() user): Promise<Tasks[]>{ // missing user type
        return await this.tasksSvc.findByUser(user.sub)
    }

    @Post()
    @UseGuards(AuthGuard)
    async create(@Body() task:taskDTO, @User() user){ // missing user type
        return await this.tasksSvc.create({...task,userId:user.sub}) // you are creating a new task with the user. so you need to pass the user and the task (dto)
    }

    @Patch(":id")
    @UseGuards(AuthGuard)
    async setAsDone(@Param('id') taskId){ // missing taskId type
        let userId = 'pega do jwt' // nice, pegou o user id do jwt?
        return await this.tasksSvc.setAsDone(taskId, userId, true);
    }

    // @Delete(":id")
    // @UseGuards(AuthGuard)
    // async remove(@Param('id') id: string){
    //     return await this.tasksSvc.deleteOne(id);
    // }
}
