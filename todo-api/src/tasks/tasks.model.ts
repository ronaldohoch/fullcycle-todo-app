import { Column, Model, Table, PrimaryKey, Default, DataType } from 'sequelize-typescript';


@Table
export class Tasks extends Model{
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    declare id: string;

    @Column
    description: string;

    @Column({defaultValue: false})
    done: boolean 

    @Column
    userId:string
}