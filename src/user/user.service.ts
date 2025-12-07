import { ConflictException, Injectable } from '@nestjs/common';
import { RegisterDto } from '@/user/dto/registerUser.dto';
import { Model } from 'mongoose';
import { User, UserDocument } from '@/user/schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { MongoServerError } from 'mongodb';
import { MONGO_ERRORS } from '@/common/constants/db-errors.constants';

@Injectable()
export class UserService {
  async findOneByEmail(email: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ email }).exec(); // .exec() ensures it returns a Promise<UserDocument | null>
  }
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async createUser(registerDto: RegisterDto) {
    try {
      return await this.userModel.create({ ...registerDto });
    } catch (error: unknown) {
      if (
        error instanceof MongoServerError &&
        error.code === MONGO_ERRORS.DUPLICATE_KEY
      ) {
        throw new ConflictException('User already exists');
      }
      throw error;
    }
  }
}
