import { UsersModel } from "src/users/users.model";

export class taskDTO{
    id: string;
    description: string;
    done: string;
    user: UsersModel
}