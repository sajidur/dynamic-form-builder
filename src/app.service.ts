import { Injectable } from '@nestjs/common';
import {
  BaseModel,
  InjectModel,
  uuid,
  InjectConnection,
} from '@iaminfinity/express-cassandra';
import { forms } from './modules/form/form.Entity';
import { formDto } from './modules/form/form.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectConnection('dbcon')
    private readonly connection: any,
    // inject CatEntity from connection=test2
    @InjectModel(forms) private readonly formModel: BaseModel<forms>,
  ) {}
}
