import { QuestionsController } from './questions.controller';
import { Module } from '@nestjs/common';
import { ExpressCassandraModule } from '@iaminfinity/express-cassandra';
import {questions} from './entity/questions.entity';
import {options} from './entity/options.entity';
import {QuestionsService} from '../Questions/questions.service'

@Module({
    imports: [ExpressCassandraModule.forFeature([questions,options]),],
    controllers: [QuestionsController],
    providers: [QuestionsService
        ],
    exports: [QuestionsService
        
    ]
})
export class QuestionsModule { }