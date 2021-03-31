import { Injectable } from '@nestjs/common';
import { questions } from '../Questions/entity/questions.entity';
import { options } from '../Questions/entity/options.entity';
import { conditions } from '../Questions/entity/conditions.entity';

import { questionsDto } from '../Questions/dto/questions.dto';

import {
  BaseModel,
  InjectModel,
  uuid,
  timeuuid,
  InjectConnection,
} from '@iaminfinity/express-cassandra';
import { query } from 'express';
@Injectable()
export class QuestionsService {
    
    constructor(
        @InjectConnection()
        private readonly connection: any,
        @InjectModel(questions)
        private readonly questions: BaseModel<questions>,
        @InjectModel(questions)
        private readonly options: BaseModel<options>,
        @InjectModel(questions)
        private readonly conditions: BaseModel<conditions>,
      ) {}

    async findQuestionsById(id): Promise<questions[]> {
        if (typeof id === 'string') {
          id = uuid(id);
        }
        return await this.questions.findAsync({form_id:uuid('00000000-0000-0000-0000-000000000000')}, { raw: true });
      }

    async createForm(questionDto: questionsDto): Promise<questions> {
      const questionModel = new this.questions(questionDto);
      questionModel.form_id=uuid(questionDto.form_id);
      questionModel.is_published=false;
      questionModel.is_active=true;
      questionModel.app_id=uuid(questionDto.app_id)
      questionModel.id=timeuuid();
      //options save
      var optionsList:options[]=[];
      for (var i=0; i<questionDto.options.length; i++ ){
        const option=new this.options(questionDto.options[i]);
        option.id=timeuuid();
        option.question_id=questionModel.id;
        option.form_id=questionModel.form_id;
        option.app_id=questionModel.app_id;
        option.company_id=questionModel.company_id;
        optionsList.push(option);
      }
      //condition Save
      for (var i=0; i<questionDto.options.length; i++ ){

      }   
      questionModel.mylist=optionsList;
      return await questionModel.saveAsync();
    }
}