import { BaseModel } from '@iaminfinity/express-cassandra';
import { forms } from './modules/form/form.Entity';
import { questions } from './modules/questions/questions.entity';
export declare class AppService {
    private readonly connection;
    private readonly formModel;
    private readonly questionsModel;
    constructor(connection: any, formModel: BaseModel<forms>, questionsModel: BaseModel<questions>);
}
