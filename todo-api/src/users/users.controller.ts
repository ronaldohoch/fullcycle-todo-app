import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UsersModel } from './users.model';

@Controller('users')
export class UsersController {

    constructor(
        private readonly usersSvc: UsersService
    ){}

    @Get()
    async findAll(): Promise<any>{
        return await this.usersSvc.findAll();
    }

    @Post()
    async create(@Body() user:CreateUserDTO){
        return await this.usersSvc.create(user);
    }

    @Delete(":id")
    async remove(@Param('id') id: string){
        return await this.usersSvc.deleteOne(id);
    }

}
