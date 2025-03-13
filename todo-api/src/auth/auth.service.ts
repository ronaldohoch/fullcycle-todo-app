import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

    constructor(
        private usersSvc: UsersService,
        private jwtSvc: JwtService
    ){}

    async sigIn(email: string, password:string): Promise<any>{
        const user = await this.usersSvc.findOneSigin(email);
        if(!user){
            throw new UnauthorizedException()
        }

        if(user && await bcrypt.compare(password, user.password)){
            console.log("truuue")
            const payload = {sub: user.id, username: user.name, guest:false}
            const jwt = await this.jwtSvc.signAsync(payload);
            return {...user,token:jwt};
        }
        throw new UnauthorizedException()

    }

    async sigInGuest(){
        return {
            token: await this.jwtSvc.signAsync({
                sub: '8TU(ojg+(Z;hhiAOJOLs]\}GAJ.BOajW',
                username: 'Guest',
                guest: true
            })
        }
    }
}
