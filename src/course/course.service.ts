import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Model } from 'mongoose';
import { Course } from './schemas/course.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CourseService {
  constructor(
    @InjectModel(Course.name) private readonly courseModel: Model<Course>,
  ) {}

  async create(createCourseDto: CreateCourseDto) {
    const course = await this.courseModel.create(createCourseDto);
    return course;
  }

  findAll() {
    return this.courseModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} course`;
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
