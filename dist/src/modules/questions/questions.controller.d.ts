import { questionsDto } from './dto/questions.dto';
import { QuestionsService } from '../Questions/questions.service';
import { optionsDto } from './dto/options.dto';
export declare class QuestionsController {
    private questionService;
    constructor(questionService: QuestionsService);
    getAll(): Promise<questionsDto[]>;
    getById(id: string): Promise<questionsDto[]>;
    publish(id: string): Promise<string>;
    create(questionsDto: questionsDto): Promise<import("./entity/questions.entity").questions | questionsDto>;
    addoption(options: optionsDto): Promise<import("./entity/options.entity").options | typeof questionsDto>;
}
