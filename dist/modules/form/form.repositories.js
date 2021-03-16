"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormRepository = void 0;
const common_1 = require("@nestjs/common");
const cassandra_driver_1 = require("cassandra-driver");
const form_model_1 = require("./form.model");
const cassandra_service_1 = require("../../common/cassandra/cassandra.service");
let FormRepository = class FormRepository {
    constructor(cassandraService) {
        this.cassandraService = cassandraService;
    }
    onModuleInit() {
        const mappingOptions = {
            models: {
                'formModel': {
                    tables: ['forms'],
                    mappings: new cassandra_driver_1.mapping.UnderscoreCqlToCamelCaseMappings
                }
            }
        };
        this.formMapper = this.cassandraService.createMapper(mappingOptions).forModel('formModel');
    }
    async getForm() {
        return (await this.formMapper.findAll()).toArray();
    }
    async getEmployeeById(id) {
        return (await this.formMapper.find({ id: id })).toArray();
    }
    async createForm(form) {
        return (await this.formMapper.insert(form)).toArray();
    }
    async updateFormName(id, name) {
        const form = new form_model_1.formModel();
        form.id = id;
        form.form_name = name;
        return (await this.formMapper.update(form, { fields: ['form_name', 'form_name'], ifExists: true })).toArray();
    }
};
FormRepository = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [cassandra_service_1.CassandraService])
], FormRepository);
exports.FormRepository = FormRepository;
//# sourceMappingURL=form.repositories.js.map