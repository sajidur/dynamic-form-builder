import { Module } from '@nestjs/common';
import { ExpressCassandraModule } from '@iaminfinity/express-cassandra';
import { FormModule } from './modules/form/form.module';
import { QuestionsModule } from './modules/questions/questions.module';

import { CassandraService } from './common/cassandra/cassandra.service';
import { CassandraModule } from './common/cassandra/cassandra.module';
import { forms } from './modules/form/form.Entity';
import { questions } from './modules/Questions/entity/questions.entity';
import { conditions } from './modules/Questions/entity/conditions.entity';
import { options } from './modules/Questions/entity/options.entity';

import { AppService } from './app.service';

@Module({
  imports: [
    ExpressCassandraModule.forRootAsync({
      useClass: CassandraService,
    }),
    ExpressCassandraModule.forRootAsync({
      name: 'dbcon',
      imports: [CassandraModule],
      useFactory: (config: CassandraService) => config.dbConfig(),
      inject: [CassandraService],
    }),
    ExpressCassandraModule.forFeature([forms,questions,conditions,options], 'dbcon'),
    FormModule,QuestionsModule
  ],
  providers: [AppService],
})
export class AppModule {}