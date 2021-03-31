import { QuestionsController } from './questions.controller';
import { Module } from '@nestjs/common';
import { ExpressCassandraModule } from '@iaminfinity/express-cassandra';
import {questions} from './entity/questions.entity';
import {conditions} from './entity/conditions.entity';
import {options} from './entity/options.entity';
import {QuestionsService} from '../Questions/questions.service'

@Module({
    imports: [ExpressCassandraModule.forFeature([questions,conditions,options]),],
    controllers: [QuestionsController],
    providers: [QuestionsService
        ],
    exports: [QuestionsService
        
    ]
})
export class QuestionsModule { }