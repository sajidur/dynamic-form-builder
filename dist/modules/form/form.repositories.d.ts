import { OnModuleInit } from '@nestjs/common';
import { mapping } from 'cassandra-driver';
import { formModel } from './form.model';
import { CassandraService } from 'src/common/cassandra/cassandra.service';
export declare class FormRepository implements OnModuleInit {
    private cassandraService;
    constructor(cassandraService: CassandraService);
    formMapper: mapping.ModelMapper<formModel>;
    onModuleInit(): void;
    getForm(): Promise<formModel[]>;
    getEmployeeById(id: number): Promise<formModel[]>;
    createForm(form: formModel): Promise<formModel[]>;
    updateFormName(id: number, name: string): Promise<formModel[]>;
}
