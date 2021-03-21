import { Controller, Get, Post, Body, Param, Put,Req  } from '@nestjs/common';
import { FormService } from './form.service';
import { forms } from './form.Entity';
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
    async getById(@Param('id') id: number) {
        return this.formService.getForm();
    }
    @Put('publish/:id')
    async publish(@Param('id') id: string) {
        return "Form published sucess";
    }
    @Post('create')
    async create(@Req() form: forms) {
        return this.formService.createForm(form);
    }
}