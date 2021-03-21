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
    @InjectConnection('test2')
    private readonly connection: any,
    // inject CatEntity from connection=test2
    @InjectModel(forms) private readonly formModel: BaseModel<forms>,
  ) {}

  async create(_formDto: formDto): Promise<forms> {
    const form = new this.formModel(_formDto);
    return await form.saveAsync();
  }

  async findById(id): Promise<forms> {
    if (typeof id === 'string') {
      id = uuid(id);
    }
    return await this.formModel.findOneAsync({ id }, { raw: true });
  }
}
