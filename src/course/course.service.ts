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

  async findOne(id: string) {
    return await this.courseModel.findById(id).exec();
  }

  async update(id: string, updateCourseDto: UpdateCourseDto) {
    return await this.courseModel.findByIdAndUpdate(id, updateCourseDto).exec();
  }

  async remove(id: string) {
    return await this.courseModel.findByIdAndDelete(id).exec();
  }
}
