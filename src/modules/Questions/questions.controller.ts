import { Controller, Get, Post, Body, Param, Put,Req  } from '@nestjs/common';
import {controlTypeDto} from './dto/controltype.dto'
import {questionsDto} from './dto/questions.dto'

import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
  } from '@nestjs/swagger';
import { conditionsDto } from './dto/conditions.dto';
import { optionsDto } from './dto/options.dto';

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
        var sub_questions:questionsDto[]=[];
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
        const sub_question=new questionsDto();
        sub_question.id='ff09737-098989-0902910-090910';
        sub_question.code="002";
        sub_question.descriptions="test questions 2",
        sub_question.controlType=control;
        sub_question.parent_questions_id='q09737-098989-0902910-090910';
        sub_question.questions_level=1;
        sub_question.form_id="f09737-098989-0902910-090910";
        sub_question.inputvalidation=" (0-9)";
        sub_question.is_condition=true;
        sub_question.is_enable_score=true;
        sub_question.is_mandatory=true;
        sub_question.order_no=1;
        sub_question.weight_value=90;
        sub_question.options=options;
        sub_questions.push(sub_question);
        question.sub_questions=sub_questions;
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