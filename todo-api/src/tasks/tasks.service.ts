import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Tasks } from './tasks.model';


@Injectable()
export class TasksService {
    constructor(
        @InjectModel(Tasks) private tasksModel: typeof Tasks
    ){}
    
    async findAll(): Promise<Tasks[]>{
        return this.tasksModel.findAll();
    }
}
