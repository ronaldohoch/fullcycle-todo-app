import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UsersModel } from './users.model';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(UsersModel) private usersModel: typeof UsersModel
    ){ }

    async findAll(): Promise<UsersModel[]>{
        return this.usersModel.findAll();
    }

    async findOneSigin(email:string, password:string): Promise<UsersModel|null>{
        return await this.usersModel.findOne({
            where:{
                email:email,
                password:password
            }
        })
    }

    async create(user): Promise<UsersModel>{
        // console.log(user.name)
        return this.usersModel.create(user);
    }

    async deleteOne(id): Promise<object|undefined>{
        const user = await this.usersModel.findOne({
            where:{
                id:id
            }
        })

        if(!user){
            throw Error('User not found.');
        }

        const rowsDeleted = await this.usersModel.destroy({
            where: {
                id:id
            }
        })

        if(rowsDeleted>0){
            return {
                message: `User ${user?.dataValues.name} has deleted.`
            }
        }

    }
}
