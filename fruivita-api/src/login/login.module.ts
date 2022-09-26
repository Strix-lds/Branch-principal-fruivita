import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Login, LoginSchema } from './entities/login.entity';

@Module({
  controllers: [LoginController],
  providers: [LoginService],
  imports: [MongooseModule.forFeature([{ name: Login.name, schema: LoginSchema }])],
})
export class LoginModule {}
