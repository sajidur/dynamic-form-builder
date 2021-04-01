import { controlTypeDto } from "./controltype.dto";
import { optionsDto } from "./options.dto";
import { conditionsDto } from "../../form/conditions.dto";
import { IsEmail, IsNotEmpty } from 'class-validator';

export class questionsDto {
    id: string;
    @IsNotEmpty()
    code: string;
    descriptions: string;
    controlType: controlTypeDto;
    parent_questions_id:string;
    questions_level:number;
    @IsNotEmpty()
    is_mandatory:boolean;
    inputvalidation:string;
    is_condition:boolean;
    @IsNotEmpty()
    form_id:string;
    order_no:number;
    set_formula:string;
    is_enable_score:boolean;
    each_item_calculation:boolean;
    app_id:string;
    weight_value:number;
    options:optionsDto[];
    conditions:conditionsDto[];
    sub_questions:questionsDto[];
  }