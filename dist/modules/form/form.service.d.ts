import { forms } from './form.Entity';
import { formDto } from './form.dto';
import { BaseModel } from '@iaminfinity/express-cassandra';
export declare class FormService {
    private readonly connection;
    private readonly forms;
    constructor(connection: any, forms: BaseModel<forms>);
    getForm(): Promise<forms[]>;
    findById(id: any): Promise<forms>;
    createForm(formDto: formDto): Promise<forms>;
    updateFormName(id: number, name: string): Promise<any>;
    published(formObj: forms): Promise<forms>;
}
