import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { FormService } from './form.service';
import { forms } from './form.Entity';
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

    @Get('getAll')
    async getAllForm(): Promise<forms[]> {
        return this.formService.getForm();
    }

    @Get('forms/:id')
    async getById(@Param('id') id: number) {
        return this.formService.getForm();
    }

    @Post('create')
    async create(form: forms) {
        return this.formService.createForm(form);
    }
}