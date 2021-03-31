import { questions } from '../Questions/entity/questions.entity';
import { options } from '../Questions/entity/options.entity';
import { conditions } from '../Questions/entity/conditions.entity';
import { questionsDto } from '../Questions/dto/questions.dto';
import { BaseModel } from '@iaminfinity/express-cassandra';
export declare class QuestionsService {
    private readonly connection;
    private readonly questions;
    private readonly options;
    private readonly conditions;
    constructor(connection: any, questions: BaseModel<questions>, options: BaseModel<options>, conditions: BaseModel<conditions>);
    findQuestionsById(id: any): Promise<questions[]>;
    createForm(questionDto: questionsDto): Promise<questions>;
}
