import { FormService } from './form.service';
import { FormController } from './form.controller';
import { Module } from '@nestjs/common';
import { ExpressCassandraModule } from '@iaminfinity/express-cassandra';
import {forms} from './form.Entity';
@Module({
    imports: [ExpressCassandraModule.forFeature([forms]),],
    controllers: [FormController],
    providers: [
        FormService
        ],
    exports: [
        FormService
    ]
})
export class FormModule { }