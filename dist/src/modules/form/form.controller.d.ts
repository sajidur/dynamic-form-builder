import { FormService } from './form.service';
import { forms } from './form.Entity';
import { formulasDto } from './formulasDto.dto';
export declare class FormController {
    private formService;
    constructor(formService: FormService);
    getAllForm(): Promise<forms[]>;
    getById(id: string): Promise<forms>;
    publish(id: string): Promise<string>;
    create(form: forms): Promise<forms>;
    formula_by_form_id(formId: string): Promise<formulasDto[]>;
}
