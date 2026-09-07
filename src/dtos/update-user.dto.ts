import { IsString, IsEmail, MinLength, MaxLength } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  name?: string;

  @IsEmail()
  @MaxLength(100)
  email?: string;

  @IsString()
  @MinLength(6)
  @MaxLength(100)
  password?: string;

  @IsString()
  @MaxLength(20)
  role?: string;
}