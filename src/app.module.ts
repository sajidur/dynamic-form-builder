import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CassandraModule } from './common/cassandra/cassandra.module';
import { FormModule } from './modules/form/form.module';


@Module({
  imports: [
    CassandraModule,
    FormModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
