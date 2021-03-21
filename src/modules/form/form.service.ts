import { Injectable } from '@nestjs/common';
import { forms } from './form.Entity';
import {
  BaseModel,
  InjectModel,
  uuid,
  InjectConnection,
} from '@iaminfinity/express-cassandra';
import { query } from 'express';
@Injectable()
export class FormService {
    
    constructor(
        @InjectConnection()
        private readonly connection: any,
        @InjectModel(forms)
        private readonly forms: BaseModel<forms>,
      ) {}


    async getForm(): Promise<forms[]> {
      return await this.forms.findAsync({}, { raw: true,allow_filtering: true });
    }

    async findById(id): Promise<forms> {
        if (typeof id === 'string') {
          id = uuid(id);
        }
        return await this.forms.findOneAsync({ id }, { raw: true });
      }

    async createForm(form: forms): Promise<forms> {
      const formModel = new this.forms(form);
        return await formModel.saveAsync();
    }

    async updateFormName(id: number, name: string) {
        var formObj=new forms();
        const form = new this.forms(formObj);
        return await form.saveAsync();
    }
}