import { BaseModel } from '@iaminfinity/express-cassandra';
import { forms } from './modules/form/form.Entity';
export declare class AppService {
    private readonly connection;
    private readonly formModel;
    constructor(connection: any, formModel: BaseModel<forms>);
}
