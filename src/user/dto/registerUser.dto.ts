import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { Role } from "../user.types";

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  fname!: string;

  @IsString()
  @IsNotEmpty()
  lname!: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password!: string;

  @IsString()
  @IsNotEmpty()
  role!: Role;
}
