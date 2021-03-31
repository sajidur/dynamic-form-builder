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
exports.FormController = void 0;
const common_1 = require("@nestjs/common");
const form_service_1 = require("./form.service");
const form_Entity_1 = require("./form.Entity");
const formulasDto_dto_1 = require("./formulasDto.dto");
const form_dto_1 = require("./form.dto");
const swagger_1 = require("@nestjs/swagger");
let FormController = class FormController {
    constructor(formService) {
        this.formService = formService;
    }
    async getAllForm() {
        return this.formService.getForm();
    }
    async getById(id) {
        if (id == '')
            return "Bad request Id should't empty";
        return this.formService.findById(id);
    }
    async publish(form) {
        return this.formService.published(form);
    }
    async create(formDto) {
        return this.formService.createForm(formDto);
    }
    async formula_by_form_id(formId) {
        var formulas = [];
        var formula = new formulasDto_dto_1.formulasDto();
        formula.id = "r09737-098989-0902910-090910";
        formula.form_id = "09737-098989-0902910-090910";
        formula.head_name = "Total valuations";
        formula.formula_string = "{q09737-098989-0902910-090910}*1.5+{ff09737-098989-0902910-090910}";
        formula.descriptions = "test";
        formulas.push(formula);
        return formulas;
    }
};
__decorate([
    common_1.Get('getAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FormController.prototype, "getAllForm", null);
__decorate([
    common_1.Get('forms/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FormController.prototype, "getById", null);
__decorate([
    common_1.Put('publish'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [form_Entity_1.forms]),
    __metadata("design:returntype", Promise)
], FormController.prototype, "publish", null);
__decorate([
    common_1.Post('create'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [form_dto_1.formDto]),
    __metadata("design:returntype", Promise)
], FormController.prototype, "create", null);
__decorate([
    common_1.Get('formula/:formId'),
    __param(0, common_1.Param('formId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FormController.prototype, "formula_by_form_id", null);
FormController = __decorate([
    swagger_1.ApiTags('Form API'),
    common_1.Controller('form'),
    __metadata("design:paramtypes", [form_service_1.FormService])
], FormController);
exports.FormController = FormController;
//# sourceMappingURL=form.controller.js.map