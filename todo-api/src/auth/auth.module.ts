import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UsersModule,
    JwtModule.register({
      global:true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '3d' }
    })
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}