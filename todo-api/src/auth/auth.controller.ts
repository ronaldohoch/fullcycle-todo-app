import { Controller, Body, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { loginDTO } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authSvc: AuthService){

    }
    
    @HttpCode(HttpStatus.OK)
    @Post('login')
    async signin(@Body() loginData: loginDTO){
        return await this.authSvc.sigIn(loginData.email, loginData.password);
    }

    @Post('guest')
    async signinGuest(){
        return await this.authSvc.sigInGuest();
    }

}
