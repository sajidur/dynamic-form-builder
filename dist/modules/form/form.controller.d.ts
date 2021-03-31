import { FormService } from './form.service';
import { forms } from './form.Entity';
import { formulasDto } from './formulasDto.dto';
import { formDto } from './form.dto';
export declare class FormController {
    private formService;
    constructor(formService: FormService);
    getAllForm(): Promise<forms[]>;
    getById(id: string): Promise<forms | "Bad request Id should't empty">;
    publish(form: forms): Promise<forms>;
    create(formDto: formDto): Promise<forms>;
    formula_by_form_id(formId: string): Promise<formulasDto[]>;
}
