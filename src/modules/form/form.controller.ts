import { Controller, Get, Post, Body, Param, Put,Req,ValidationPipe  } from '@nestjs/common';
import { FormService } from './form.service';
import { forms } from './form.Entity';
import { formulasDto } from './formulasDto.dto';
import { formDto } from './form.dto';

import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
  } from '@nestjs/swagger';
import { controlTypeDto } from '../questions/dto/controltype.dto';
import { ControllType } from '../Questions/control_type';

@ApiTags('Form API')
@Controller('form')
export class FormController {
    
    constructor(private formService: FormService){}

    @Get('getAll')
    async getAllForm(): Promise<forms[]> {
        return this.formService.getForm();
    }
    @Get('controll/getAll')
    async getAllControll() {
       return ControllType;
    }
    @Get('forms/:id')
    async getById(@Param('id') id: string) {
        if (id=='')
        return "Bad request Id should't empty";
        return this.formService.findById(id);
    }
    @Put('publish')
    async publish(@Body() form: forms) {
        return this.formService.published(form);
    }
    @Post('create')
    async create(@Body() formDto: formDto) {
        return this.formService.createForm(formDto);
    }
    @Get('formula/:formId')
    async formula_by_form_id(@Param('formId') formId:string){
        var formulas:formulasDto[]=[];
        var formula=new formulasDto();
        formula.id="r09737-098989-0902910-090910";
        formula.form_id="09737-098989-0902910-090910";
        formula.head_name="Total valuations";
        formula.formula_string="{q09737-098989-0902910-090910}*1.5+{ff09737-098989-0902910-090910}";
        formula.descriptions="test";
        formulas.push(formula);
        return formulas;
    }
}