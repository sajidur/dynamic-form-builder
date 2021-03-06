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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormService = void 0;
const common_1 = require("@nestjs/common");
const form_Entity_1 = require("./form.Entity");
const conditions_entity_1 = require("./conditions.entity");
const express_cassandra_1 = require("@iaminfinity/express-cassandra");
let FormService = class FormService {
    constructor(connection, forms, conditions) {
        this.connection = connection;
        this.forms = forms;
        this.conditions = conditions;
    }
    async getForm() {
        return await this.forms.findAsync({}, { raw: true });
    }
    async findById(id) {
        if (typeof id === 'string') {
            id = express_cassandra_1.uuid(id);
        }
        return await this.forms.findOneAsync({ app_id: express_cassandra_1.uuid('00000000-0000-0000-0000-000000000000'), id: id }, { raw: true });
    }
    async createCondition(condition) {
        const conditionModel = new this.conditions(condition);
        conditionModel.id = express_cassandra_1.timeuuid();
        conditionModel.form_id = express_cassandra_1.uuid(condition.form_id);
        conditionModel.target_id = express_cassandra_1.uuid(condition.target_id);
        return await conditionModel.saveAsync();
    }
    async createForm(formDto) {
        const formModel = new this.forms(formDto);
        formModel.app_id = express_cassandra_1.uuid(formModel.app_id);
        formModel.is_published = false;
        formModel.is_active = true;
        return await formModel.saveAsync();
    }
    async updateFormName(id, name) {
        var formObj = new form_Entity_1.forms();
        const form = new this.forms(formObj);
        return await form.saveAsync();
    }
    async published(formObj) {
        const updated = new this.forms(formObj);
        var id = express_cassandra_1.uuid(formObj.id);
        var app_id = express_cassandra_1.uuid(formObj.app_id);
        var res = this.forms.update({ app_id: app_id, id: id }, { is_published: formObj.is_published });
        return updated;
    }
};
FormService = __decorate([
    common_1.Injectable(),
    __param(0, express_cassandra_1.InjectConnection()),
    __param(1, express_cassandra_1.InjectModel(form_Entity_1.forms)),
    __param(2, express_cassandra_1.InjectModel(conditions_entity_1.conditions)),
    __metadata("design:paramtypes", [Object, Object, Object])
], FormService);
exports.FormService = FormService;
//# sourceMappingURL=form.service.js.map