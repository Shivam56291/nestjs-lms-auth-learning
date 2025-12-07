import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from '../user/dto/registerUser.dto';
import { Body } from '@nestjs/common';
import { LoginDto } from '@/user/dto/loginUser.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authservice: AuthService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return await this.authservice.registerUser(registerDto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return await this.authservice.loginUser(loginDto);
  }
}
