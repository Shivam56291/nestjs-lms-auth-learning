import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/registerUser.dto';
import { Body } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly authservice: AuthService) { }
  
  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return await this.authservice.registerUser(registerDto);
  }
}
