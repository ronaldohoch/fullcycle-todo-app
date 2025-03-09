import { Column, Model, Table, PrimaryKey, Default, DataType, IsEmail } from 'sequelize-typescript';


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

    @Column
    password: string

    @Column({defaultValue: true})
    isActive: boolean
}