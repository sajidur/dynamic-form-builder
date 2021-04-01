import { forms } from './form.Entity';
import { formDto } from './form.dto';
import { conditionsDto } from './conditions.dto';
import { conditions } from './conditions.entity';
import { BaseModel } from '@iaminfinity/express-cassandra';
export declare class FormService {
    private readonly connection;
    private readonly forms;
    private readonly conditions;
    constructor(connection: any, forms: BaseModel<forms>, conditions: BaseModel<conditions>);
    getForm(): Promise<forms[]>;
    findById(id: any): Promise<forms>;
    createCondition(condition: conditionsDto): Promise<conditions>;
    createForm(formDto: formDto): Promise<forms>;
    updateFormName(id: number, name: string): Promise<any>;
    published(formObj: forms): Promise<forms>;
}
