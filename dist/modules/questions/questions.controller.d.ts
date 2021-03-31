import { questionsDto } from './dto/questions.dto';
import { QuestionsService } from '../Questions/questions.service';
export declare class QuestionsController {
    private questionService;
    constructor(questionService: QuestionsService);
    getAll(): Promise<questionsDto[]>;
    getById(id: string): Promise<questionsDto[]>;
    publish(id: string): Promise<string>;
    create(questionsDto: questionsDto): Promise<import("./entity/questions.entity").questions | questionsDto>;
}
