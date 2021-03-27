import { Injectable } from '@nestjs/common';
import {
  BaseModel,
  InjectModel,
  uuid,
  InjectConnection,
} from '@iaminfinity/express-cassandra';
import { forms } from './modules/form/form.Entity';
import { questions } from './modules/Questions/entity/questions.entity';
import { conditions } from './modules/Questions/entity/conditions.entity';
import { options } from './modules/Questions/entity/options.entity';


@Injectable()
export class AppService {
  constructor(
    @InjectConnection('dbcon')
    private readonly connection: any,
    // inject entity from connection=dbcon
    @InjectModel(forms) private readonly form: BaseModel<forms>,
    @InjectModel(questions) private readonly questions: BaseModel<questions>,
    @InjectModel(conditions) private readonly conditions: BaseModel<conditions>,
    @InjectModel(options) private readonly options: BaseModel<options>,

  ) {}
}
