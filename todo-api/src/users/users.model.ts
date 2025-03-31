import { Column, Model, Table, PrimaryKey, Default, DataType, IsEmail, AfterCreate, BeforeCreate } from 'sequelize-typescript';
import * as bcrypt from 'bcrypt';


@Table
export class UsersModel extends Model{
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    declare id: string;

    @Column 
    name: string;

    @IsEmail
    @Column
    email: string

    @BeforeCreate
    static async Updatepassword(user){
        user.dataValues.password = await bcrypt.hash(user.dataValues.password, 10);
    }
    @Column
    password: string

    @Column({defaultValue: true})
    isActive: boolean
}