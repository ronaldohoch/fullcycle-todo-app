import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private usersSvc: UsersService,
        private jwtSvc: JwtService
    ){}

    async sigIn(email: string, password:string): Promise<any>{
        const user = await this.usersSvc.findOneSigin(email,password);
        if(!user){
            throw new UnauthorizedException()
        }
        const payload = {sub: user.id, username: user.name}
        return {
            token: await this.jwtSvc.signAsync(payload)
        }
    }
}
