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
        const payload = {sub: user.id, username: user.name, guest:false}
        return {
            token: await this.jwtSvc.signAsync(payload)
        }
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
