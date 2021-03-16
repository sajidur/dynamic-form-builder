import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { FormService } from './form.service';
import { formModel } from './form.model';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
  } from '@nestjs/swagger';

@ApiTags('Form API')
@Controller()
export class FormController {
    
    constructor(private formService: FormService){}

    @Get('forms')
    async getForm() {
        return this.formService.getForm();
    }

    @Get('forms/:id')
    async getById(@Param('id') id: number) {
        return this.formService.getById(id);
    }

    @Put('forms/:id')
    async updateEmployeeById(@Param('id') id: number, @Body() form: formModel) {
        return this.formService.updateFormName(id, form.form_name);
    }

    @Post('forms')
    async createEmployee(@Body() form: formModel) {
        return this.formService.createForm(form);
    }
}