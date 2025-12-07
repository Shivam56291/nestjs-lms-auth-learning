import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '@/user/user.service';
import { RegisterDto } from '../user/dto/registerUser.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from '@/user/dto/loginUser.dto';
import { UserDocument } from '@/user/schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async registerUser(registerDto: RegisterDto) {
    const hash = await bcrypt.hash(registerDto.password, 10);

    const user = await this.userService.createUser({
      ...registerDto,
      password: hash,
    });

    const payload = { id: user._id, email: user.email };
    const token = await this.jwtService.signAsync(payload);

    return { token };
  }

  async loginUser(loginDto: LoginDto) {
    const user: UserDocument | null = await this.userService.findOneByEmail(
      loginDto.email,
    );

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(loginDto.password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }

    console.log('User found:', { id: user._id, email: user.email });
    console.log('JwtService instance:', this.jwtService);

    const payload = { id: user._id, email: user.email };
    const token = await this.jwtService.signAsync(payload);

    return { token };
  }

  async getUserById(id: string): Promise<UserDocument | null> {
    return this.userService.getUserById(id);
  }
}
