import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { UsersModel } from './users/users.model';
import { Tasks } from './tasks/tasks.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_host,
      port: Number(process.env.DB_port),
      username: process.env.DB_username,
      password: process.env.DB_password,
      database: process.env.DB_database,
      models: [UsersModel, Tasks],
      autoLoadModels:true,
      synchronize:true,
    }),
    UsersModule,
    AuthModule,
    TasksModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}