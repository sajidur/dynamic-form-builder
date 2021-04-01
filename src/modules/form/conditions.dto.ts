import { IsEmail, IsNotEmpty } from 'class-validator';
export class conditionsDto {
    id: string;
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    compare_value_to: number;  
    @IsNotEmpty()
    form_id:string;
    order_no:number;
    @IsNotEmpty()
    logical_operator:string;
    @IsNotEmpty()
    compare_value_with:number;
    @IsNotEmpty()
    action_type:number;
    @IsNotEmpty()
    target_id:string;
}