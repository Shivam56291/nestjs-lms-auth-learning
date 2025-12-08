import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDto } from './create-course.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateCourseDto extends PartialType(CreateCourseDto) {
  @IsString()
  name?: string;

  @IsString()
  description?: string;

  @IsString()
  level?: string;

  @IsNumber()
  price?: number;
}
