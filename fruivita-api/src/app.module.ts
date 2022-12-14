import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/fruivita'),
    LoginModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
