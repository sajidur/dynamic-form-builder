import { Controller, Get, Post, Body, Param, Put,Req  } from '@nestjs/common';
import { FormService } from './form.service';
import { forms } from './form.Entity';
import { formulasDto } from './formulasDto.dto';

import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
  } from '@nestjs/swagger';

@ApiTags('Form API')
@Controller('form')
export class FormController {
    
    constructor(private formService: FormService){}

    @Get('getAll')
    async getAllForm(): Promise<forms[]> {
        return this.formService.getForm();
    }

    @Get('forms/:id')
    async getById(@Param('id') id: string) {
        return this.formService.findById(id);
    }
    @Put('publish/:id')
    async publish(@Param('id') id: string) {
        return "Form published sucess";
    }
    @Post('create')
    async create(@Req() form: forms) {
        return this.formService.createForm(form);
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