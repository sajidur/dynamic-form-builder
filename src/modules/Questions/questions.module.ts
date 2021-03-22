import { QuestionsController } from './questions.controller';
import { Module } from '@nestjs/common';
import { ExpressCassandraModule } from '@iaminfinity/express-cassandra';
import {questions} from './questions.entity';
@Module({
    imports: [ExpressCassandraModule.forFeature([questions]),],
    controllers: [QuestionsController],
    providers: [
        ],
    exports: [
        
    ]
})
export class QuestionsModule { }