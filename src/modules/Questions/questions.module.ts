import { QuestionsController } from './questions.controller';
import { Module } from '@nestjs/common';
import { ExpressCassandraModule } from '@iaminfinity/express-cassandra';
import {questions} from './entity/questions.entity';
import {conditions} from './entity/conditions.entity';
import {options} from './entity/options.entity';

@Module({
    imports: [ExpressCassandraModule.forFeature([questions,conditions,options]),],
    controllers: [QuestionsController],
    providers: [
        ],
    exports: [
        
    ]
})
export class QuestionsModule { }