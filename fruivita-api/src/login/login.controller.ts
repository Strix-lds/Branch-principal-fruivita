import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { userInfo } from 'os';
import { Login } from './entities/login.entity';

@Controller('account')
export class LoginController {
  constructor(private readonly loginService: LoginService) { }

  @Post()
  async create(
    @Body('user') user,
    @Body('password') password,
    @Body('date') date,
    @Body('email') email) {
    console.log(user, password,date);

    return await this.loginService.create(user, password,date,email);
  }

  @Get()
  findAll() {
    return this.loginService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loginService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoginDto: UpdateLoginDto) {
    return this.loginService.update(+id, updateLoginDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loginService.remove(id);
  }

  @Post('auth')
  async auth(
    @Body('user') user,
    @Body('password') password
  ) {
    return await this.loginService.authenticate(user,password)
  }
}
