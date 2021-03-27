import { BaseModel } from '@iaminfinity/express-cassandra';
import { forms } from './modules/form/form.Entity';
import { questions } from './modules/Questions/entity/questions.entity';
import { conditions } from './modules/Questions/entity/conditions.entity';
import { options } from './modules/Questions/entity/options.entity';
export declare class AppService {
    private readonly connection;
    private readonly form;
    private readonly questions;
    private readonly conditions;
    private readonly options;
    constructor(connection: any, form: BaseModel<forms>, questions: BaseModel<questions>, conditions: BaseModel<conditions>, options: BaseModel<options>);
}
