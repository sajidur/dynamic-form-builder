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
exports.QuestionsService = void 0;
const common_1 = require("@nestjs/common");
const questions_entity_1 = require("../Questions/entity/questions.entity");
const options_entity_1 = require("../Questions/entity/options.entity");
const conditions_entity_1 = require("../Questions/entity/conditions.entity");
const express_cassandra_1 = require("@iaminfinity/express-cassandra");
let QuestionsService = class QuestionsService {
    constructor(connection, questions, options, conditions) {
        this.connection = connection;
        this.questions = questions;
        this.options = options;
        this.conditions = conditions;
    }
    async findQuestionsById(id) {
        if (typeof id === 'string') {
            id = express_cassandra_1.uuid(id);
        }
        return await this.questions.findAsync({ form_id: express_cassandra_1.uuid('00000000-0000-0000-0000-000000000000') }, { raw: true });
    }
    async createOption(options) {
        const option = new this.options(options);
        option.id = express_cassandra_1.timeuuid();
        option.question_id = express_cassandra_1.timeuuid();
        option.form_id = express_cassandra_1.timeuuid();
        return await option.saveAsync();
    }
    async createForm(questionDto) {
        const questionModel = new this.questions(questionDto);
        questionModel.form_id = express_cassandra_1.uuid(questionDto.form_id);
        questionModel.is_published = false;
        questionModel.is_active = true;
        questionModel.app_id = express_cassandra_1.uuid(questionDto.app_id);
        questionModel.id = express_cassandra_1.timeuuid();
        var optionsList = [];
        for (var i = 0; i < questionDto.options.length; i++) {
            const option = new this.options(questionDto.options[i]);
            option.id = express_cassandra_1.timeuuid();
            option.question_id = questionModel.id;
            option.form_id = questionModel.form_id;
            option.app_id = questionModel.app_id;
            option.company_id = questionModel.company_id;
            optionsList.push(option);
        }
        for (var i = 0; i < questionDto.options.length; i++) {
        }
        questionModel.mylist = optionsList;
        return await questionModel.saveAsync();
    }
};
QuestionsService = __decorate([
    common_1.Injectable(),
    __param(0, express_cassandra_1.InjectConnection()),
    __param(1, express_cassandra_1.InjectModel(questions_entity_1.questions)),
    __param(2, express_cassandra_1.InjectModel(options_entity_1.options)),
    __param(3, express_cassandra_1.InjectModel(conditions_entity_1.conditions)),
    __metadata("design:paramtypes", [Object, Object, Object, Object])
], QuestionsService);
exports.QuestionsService = QuestionsService;
//# sourceMappingURL=questions.service.js.map