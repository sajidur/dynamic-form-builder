import { IsEmail, IsNotEmpty } from 'class-validator';
export class formDto {
    @IsNotEmpty()
     form_name: string;
     id: string;
  }