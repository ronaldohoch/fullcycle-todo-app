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

    async findOneSigin(email:string): Promise<any>{
        const user = await this.usersModel.findOne({
            raw: true,
            where:{
                email:email
            }
        }); // what's happen if the user is not found?

        return user;
    }

    async create(user): Promise<UsersModel>{ // aways type the params
        return this.usersModel.create(user);
    }

    async deleteOne(id): Promise<object|undefined>{ // same here, and id should be a number
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
        } // what's happen if rowsDeleted is 0?

    }
}
