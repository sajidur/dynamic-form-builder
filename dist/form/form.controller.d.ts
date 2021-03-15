import { FormService } from './form.service';
import { formModel } from './form.model';
export declare class FormController {
    private formService;
    constructor(formService: FormService);
    getForm(): Promise<formModel[]>;
    getById(id: number): Promise<formModel[]>;
    updateEmployeeById(id: number, form: formModel): Promise<formModel[]>;
    createEmployee(form: formModel): Promise<formModel[]>;
}
