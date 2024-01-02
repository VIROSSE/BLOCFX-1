import { IsEmail, IsNotEmpty, IsStrongPassword } from 'class-validator';
export class CreateUserDto {
  @IsNotEmpty()
  firstname: string;

  @IsNotEmpty()
  lastname: string;

  @IsNotEmpty()
  company: string;

  @IsNotEmpty()
  phone_number: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  town: string;

  @IsNotEmpty()
  region: string;

  @IsNotEmpty()
  postcode: string;

  @IsNotEmpty()
  country: string;

  @IsStrongPassword()
  @IsNotEmpty()
  password: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
