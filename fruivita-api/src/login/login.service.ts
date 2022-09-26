import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { urlToHttpOptions } from 'url';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { Login, LoginDocument } from './entities/login.entity';


@Injectable()
export class LoginService {
  constructor(
    @InjectModel('Login') private readonly loginModel: Model<LoginDocument>
  ) { }



  async create(user: string, password: string, date: Date, email:string) {
    const newlogin = new this.loginModel({ user, password,date,email })


    return await newlogin.save();
  }

  findAll() {
    return `This action returns all login`;
  }

  findOne(id: string) {
    return this.loginModel.findById(id)
  }

  update(id: number, updateLoginDto: UpdateLoginDto) {
    return `cleitinho esteve aqui #${id} login`;
  }

  async remove(id: string) {
    this.loginModel.deleteOne(this.loginModel.findById(id))
    return `It's done`;

  }

  async authenticate(user: string, password: string) {
    const existingUser = await this.loginModel.findOne({user, password})

    if (existingUser) {
      return existingUser
    } else {
      return 'not found';
    }
  }
}
