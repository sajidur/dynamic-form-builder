import { Injectable, OnModuleInit } from '@nestjs/common';
import { mapping } from 'cassandra-driver';
import { formModel } from './form.model';
import { CassandraService } from 'src/common/cassandra/cassandra.service';

@Injectable()
export class FormRepository implements OnModuleInit {

    constructor(private cassandraService: CassandraService) { }

    formMapper: mapping.ModelMapper<formModel>;

    onModuleInit() {
        const mappingOptions: mapping.MappingOptions = {
            models: {
                'formModel': {
                    tables: ['forms'],
                    mappings: new mapping.UnderscoreCqlToCamelCaseMappings
                }
            }
        }

        this.formMapper = this.cassandraService.createMapper(mappingOptions).forModel('formModel');
    }

    async getForm() {
        return (await this.formMapper.findAll()).toArray();
    }

    async getEmployeeById(id: number) {
        return (await this.formMapper.find({ id: id})).toArray();
    }

    async createForm(form: formModel) {
        return (await this.formMapper.insert(form)).toArray();
    }

    async updateFormName(id: number, name: string) {
        const form = new formModel();
        form.id  = id;
        form.form_name = name;
        return (await this.formMapper.update(form, { fields: ['form_name', 'form_name'], ifExists: true})).toArray();
    }
}