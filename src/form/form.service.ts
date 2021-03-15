import { Injectable } from '@nestjs/common';
import { FormRepository } from './form.repositories';
import { formModel } from './form.model';

@Injectable()
export class FormService {
    
    constructor(private formRepository: FormRepository){}

    async getForm() {
        return this.formRepository.getForm();
    }

    async getById(id: number) {
        return this.formRepository.getEmployeeById(id);
    }

    async createForm(form: formModel) {
        return this.formRepository.createForm(form);
    }

    async updateFormName(id: number, name: string) {
        return this.formRepository.updateFormName(id, name);
    }
}