import { forms } from './form.model';
import { BaseModel } from '@iaminfinity/express-cassandra';
export declare class FormRepository {
    private readonly connection;
    private readonly forms;
    constructor(connection: any, forms: BaseModel<forms>);
    getForm(): Promise<any>;
    findById(id: any): Promise<forms>;
    createForm(form: forms): Promise<any>;
    updateFormName(id: number, name: string): Promise<any>;
}
