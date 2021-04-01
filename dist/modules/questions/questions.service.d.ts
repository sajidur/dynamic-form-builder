import { questions } from '../Questions/entity/questions.entity';
import { options } from '../Questions/entity/options.entity';
import { questionsDto } from '../Questions/dto/questions.dto';
import { BaseModel } from '@iaminfinity/express-cassandra';
import { optionsDto } from './dto/options.dto';
export declare class QuestionsService {
    private readonly connection;
    private readonly questions;
    private readonly options;
    constructor(connection: any, questions: BaseModel<questions>, options: BaseModel<options>);
    findQuestionsById(id: any): Promise<questions[]>;
    createOption(options: optionsDto): Promise<options>;
    createForm(questionDto: questionsDto): Promise<questions>;
}
