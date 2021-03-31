import { Injectable } from '@nestjs/common';
import { forms } from './form.Entity';
import { formDto } from './form.dto';

import {
  BaseModel,
  InjectModel,
  uuid,
  InjectConnection,
} from '@iaminfinity/express-cassandra';
import { query } from 'express';
import { formulasDto } from './formulasDto.dto';
@Injectable()
export class FormService {
    
    constructor(
        @InjectConnection()
        private readonly connection: any,
        @InjectModel(forms)
        private readonly forms: BaseModel<forms>,
      ) {}


    async getForm(): Promise<forms[]> {
      return await this.forms.findAsync({}, { raw: true });
    }

    async findById(id): Promise<forms> {
        if (typeof id === 'string') {
          id = uuid(id);
        }
        return await this.forms.findOneAsync({app_id:uuid('00000000-0000-0000-0000-000000000000'), id:id }, { raw: true });
      }

    async createForm(formDto: formDto): Promise<forms> {
      const formModel = new this.forms(formDto);
      formModel.app_id=uuid(formModel.app_id);
      formModel.is_published=false;
      formModel.is_active=true
        return await formModel.saveAsync();
    }

    async updateFormName(id: number, name: string) {
        var formObj=new forms();
        const form = new this.forms(formObj);
        return await form.saveAsync();
    }
    async published(formObj: forms): Promise<forms> {
      const updated = new this.forms(formObj);
      var id=uuid(formObj.id);
      var app_id=uuid(formObj.app_id);
      var res=this.forms.update({ app_id:app_id , id:id  }, { is_published: formObj.is_published });
      return updated;
  }
}