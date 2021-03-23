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
exports.QuestionsController = void 0;
const common_1 = require("@nestjs/common");
const controltype_dto_1 = require("../Questions/controltype.dto");
const questions_dto_1 = require("../Questions/questions.dto");
const swagger_1 = require("@nestjs/swagger");
const conditions_dto_1 = require("./conditions.dto");
const options_dto_1 = require("./options.dto");
let QuestionsController = class QuestionsController {
    async getAll() {
        const cat = new questions_dto_1.questionsDto[1]();
        return cat;
    }
    async getById(id) {
        var questions = [];
        var sub_questions = [];
        var conditions = [];
        var options = [];
        var condition = new conditions_dto_1.conditionsDto();
        condition.action_type = 1;
        condition.compare_value_to = 4;
        condition.compare_value_with = 4;
        condition.form_id = "09737-098989-0902910-090910";
        condition.id = "a9737-098989-0902910-090910";
        condition.logical_operator = "=";
        condition.name = "Test Condition";
        condition.target_id = "b9737-098989-0902910-090910";
        condition.order_no = 1;
        conditions.push(condition);
        var option = new options_dto_1.optionsDto();
        option.id = "c09737-098989-0902910-090910";
        option.is_condition = true;
        option.is_mandatory = true;
        option.is_pre_slected = true;
        option.name = "Option 1";
        option.order_no = 1;
        option.questions_id = "09737-098989-0902910-090910";
        option.score_value = 1;
        option.value = "5";
        options.push(option);
        var control = new controltype_dto_1.controlTypeDto();
        control.id = "09737-098989-0902910-090910";
        control.type_name = "Dropdown";
        control.is_active = true;
        const question = new questions_dto_1.questionsDto();
        question.code = "001";
        question.descriptions = "test questions",
            question.id = "q09737-098989-0902910-090910",
            question.controlType = control;
        question.parent_questions_id = '';
        question.questions_level = 0;
        question.form_id = "f09737-098989-0902910-090910";
        question.inputvalidation = " (0-9)";
        question.is_condition = true;
        question.is_enable_score = true;
        question.is_mandatory = true;
        question.order_no = 1;
        question.weight_value = 100;
        question.conditions = conditions;
        question.options = options;
        const sub_question = new questions_dto_1.questionsDto();
        sub_question.id = 'ff09737-098989-0902910-090910';
        sub_question.code = "002";
        sub_question.descriptions = "test questions 2",
            sub_question.controlType = control;
        sub_question.parent_questions_id = 'q09737-098989-0902910-090910';
        sub_question.questions_level = 1;
        sub_question.form_id = "f09737-098989-0902910-090910";
        sub_question.inputvalidation = " (0-9)";
        sub_question.is_condition = true;
        sub_question.is_enable_score = true;
        sub_question.is_mandatory = true;
        sub_question.order_no = 1;
        sub_question.weight_value = 90;
        sub_question.options = options;
        sub_questions.push(sub_question);
        question.sub_questions = sub_questions;
        questions.push(question);
        return questions;
    }
    async publish(id) {
        return "Form published sucess";
    }
    async create(form) {
        const cat = new questions_dto_1.questionsDto[1]();
        return cat;
    }
};
__decorate([
    common_1.Get('getAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QuestionsController.prototype, "getAll", null);
__decorate([
    common_1.Get('formId/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QuestionsController.prototype, "getById", null);
__decorate([
    common_1.Put('publish/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QuestionsController.prototype, "publish", null);
__decorate([
    common_1.Post('create'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [questions_dto_1.questionsDto]),
    __metadata("design:returntype", Promise)
], QuestionsController.prototype, "create", null);
QuestionsController = __decorate([
    swagger_1.ApiTags('Questions API'),
    common_1.Controller('questions')
], QuestionsController);
exports.QuestionsController = QuestionsController;
//# sourceMappingURL=questions.controller.js.map