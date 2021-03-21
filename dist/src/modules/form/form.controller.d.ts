import { FormService } from './form.service';
import { forms } from './form.Entity';
export declare class FormController {
    private formService;
    constructor(formService: FormService);
    getAllForm(): Promise<forms[]>;
    getById(id: number): Promise<forms[]>;
    publish(id: string): Promise<string>;
    create(form: forms): Promise<forms>;
}