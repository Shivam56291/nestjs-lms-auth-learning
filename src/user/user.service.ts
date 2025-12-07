import { Injectable } from '@nestjs/common';
import { RegisterDto } from '@/auth/dto/registerUser.dto';
import { Model } from 'mongoose';
import { User } from '@/user/schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async createUser(registerDto: RegisterDto) {
    return await this.userModel.create({ ...registerDto });
  }
}
