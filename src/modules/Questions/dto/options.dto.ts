import { IsEmail, IsNotEmpty } from 'class-validator';

export class optionsDto {
    id: string;
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    value: string;  
    is_mandatory:boolean;
    is_condition:boolean;
    @IsNotEmpty()
    questions_id:string;
    order_no:number;
    is_pre_slected:boolean;
    @IsNotEmpty()
    score_value:number;
}