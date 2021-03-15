import { FormService } from './form.service';
import { FormController } from './form.controller';
import { Module } from '@nestjs/common';
import { FormRepository } from './form.repositories';
import { CassandraModule } from 'src/common/cassandra/cassandra.module';

@Module({
    imports: [CassandraModule],
    controllers: [FormController],
    providers: [
        FormService,
        FormRepository
    ],
    exports: [
        FormService,
        FormRepository
    ]
})
export class FormModule { }