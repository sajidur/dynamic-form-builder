import { Module } from '@nestjs/common';
import { ExpressCassandraModule } from '@iaminfinity/express-cassandra';
import { FormModule } from './modules/form/form.module';
import { CassandraService } from './common/cassandra/cassandra.service';
import { CassandraModule } from './common/cassandra/cassandra.module';
import { forms } from './modules/form/form.Entity';
import { AppService } from './app.service';

@Module({
  imports: [
    ExpressCassandraModule.forRootAsync({
      useClass: CassandraService,
    }),
    ExpressCassandraModule.forRootAsync({
      name: 'test2',
      imports: [CassandraModule],
      useFactory: (config: CassandraService) => config.dbConfig(),
      inject: [CassandraService],
    }),
    ExpressCassandraModule.forFeature([forms], 'test2'),
    FormModule,
  ],
  providers: [AppService],
})
export class AppModule {}