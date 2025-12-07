import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from '../user/dto/registerUser.dto';
import { Body } from '@nestjs/common';
import { LoginDto } from '@/user/dto/loginUser.dto';
import { AuthGuard } from './auth.guard';

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

  @UseGuards(AuthGuard)
  @Get('profile')
  async getProfile(@Request() req) {
    const id = req.user.id;
    const user = await this.authservice.getUserById(id);
    return {
      message: 'You are authenticated ✅',
      user: {
        name: user?.fname + ' ' + user?.lname,
        email: user?.email,
      },
    };
  }
}
