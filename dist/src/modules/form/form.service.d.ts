import { forms } from './form.Entity';
import { BaseModel } from '@iaminfinity/express-cassandra';
export declare class FormService {
    private readonly connection;
    private readonly forms;
    constructor(connection: any, forms: BaseModel<forms>);
    getForm(): Promise<forms[]>;
    findById(id: any): Promise<forms>;
    createForm(form: forms): Promise<forms>;
    updateFormName(id: number, name: string): Promise<any>;
    published(formObj: forms): Promise<forms>;
}
