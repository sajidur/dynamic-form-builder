import { questionsDto } from '../Questions/questions.dto';
export declare class QuestionsController {
    getAll(): Promise<questionsDto[]>;
    getById(id: string): Promise<questionsDto[]>;
    publish(id: string): Promise<string>;
    create(form: questionsDto): Promise<any>;
}
