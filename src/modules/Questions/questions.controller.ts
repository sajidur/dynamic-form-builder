import { Controller, Get, Post, Body, Param, Put,Req  } from '@nestjs/common';
import {controlTypeDto} from '../Questions/controltype.dto'
import {questionsDto} from '../Questions/questions.dto'

import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
  } from '@nestjs/swagger';
import { conditionsDto } from './conditions.dto';
import { optionsDto } from './options.dto';

@ApiTags('Questions API')
@Controller('questions')
export class QuestionsController {
    @Get('getAll')
    async getAll(): Promise<questionsDto[]> {
        const cat = new questionsDto[1]();
        return cat;
    }

    @Get('formId/:id')
    async getById(@Param('id') id: string) {
        var questions: questionsDto[] = [];
        var conditions: conditionsDto[] = [];
        var options: optionsDto[] = [];
        var condition=new conditionsDto();
        condition.action_type=1;
        condition.compare_value_to=4;
        condition.compare_value_with=4;
        condition.form_id="09737-098989-0902910-090910";
        condition.id="a9737-098989-0902910-090910";
        condition.logical_operator="=";
        condition.name="Test Condition";
        condition.target_id="b9737-098989-0902910-090910";
        condition.order_no=1;
        conditions.push(condition);

        //options
        var option=new optionsDto();
        option.id="c09737-098989-0902910-090910";
        option.is_condition=true;
        option.is_mandatory=true;
        option.is_pre_slected=true;
        option.name="Option 1";
        option.order_no=1;
        option.questions_id="09737-098989-0902910-090910";
        option.score_value=1;
        option.value="5";
        options.push(option);

        //control type
        var control=new controlTypeDto();
        control.id="09737-098989-0902910-090910";
        control.type_name="Dropdown";
        control.is_active=true;

        const question = new questionsDto();
        question.code="001";
        question.descriptions="test questions",
        question.id="q09737-098989-0902910-090910",
        question.controlType=control;
        question.parent_questions_id='';
        question.questions_level=0;
        question.form_id="f09737-098989-0902910-090910";
        question.inputvalidation=" (0-9)";
        question.is_condition=true;
        question.is_enable_score=true;
        question.is_mandatory=true;
        question.order_no=1;
        question.weight_value=100;
        question.conditions=conditions;
        question.options=options;
        questions.push(question);
        return questions;   
     }
    @Put('publish/:id')
    async publish(@Param('id') id: string) {
        return "Form published sucess";
    }
    @Post('create')
    async create(@Req() form: questionsDto) {
        const cat = new questionsDto[1]();
        return cat;   
     }
}