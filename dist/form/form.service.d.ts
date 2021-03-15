import { FormRepository } from './form.repositories';
import { formModel } from './form.model';
export declare class FormService {
    private formRepository;
    constructor(formRepository: FormRepository);
    getForm(): Promise<formModel[]>;
    getById(id: number): Promise<formModel[]>;
    createForm(form: formModel): Promise<formModel[]>;
    updateFormName(id: number, name: string): Promise<formModel[]>;
}
