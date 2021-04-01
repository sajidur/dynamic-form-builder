import { FormService } from './form.service';
import { forms } from './form.Entity';
import { formulasDto } from './formulasDto.dto';
import { formDto } from './form.dto';
import { ControllType } from '../Questions/control_type';
export declare class FormController {
    private formService;
    constructor(formService: FormService);
    getAllForm(): Promise<forms[]>;
    getAllControll(): Promise<typeof ControllType>;
    getById(id: string): Promise<forms | "Bad request Id should't empty">;
    publish(form: forms): Promise<forms>;
    create(formDto: formDto): Promise<forms>;
    formula_by_form_id(formId: string): Promise<formulasDto[]>;
}
