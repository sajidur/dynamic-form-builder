import { BaseModel } from '@iaminfinity/express-cassandra';
import { forms } from './modules/form/form.Entity';
import { formDto } from './modules/form/form.dto';
export declare class AppService {
    private readonly connection;
    private readonly formModel;
    constructor(connection: any, formModel: BaseModel<forms>);
    create(_formDto: formDto): Promise<forms>;
    findById(id: any): Promise<forms>;
}
