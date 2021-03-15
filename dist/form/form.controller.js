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
const form_model_1 = require("./form.model");
let FormController = class FormController {
    constructor(formService) {
        this.formService = formService;
    }
    async getForm() {
        return this.formService.getForm();
    }
    async getById(id) {
        return this.formService.getById(id);
    }
    async updateEmployeeById(id, form) {
        return this.formService.updateFormName(id, form.form_name);
    }
    async createEmployee(form) {
        return this.formService.createForm(form);
    }
};
__decorate([
    common_1.Get('forms'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FormController.prototype, "getForm", null);
__decorate([
    common_1.Get('forms/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FormController.prototype, "getById", null);
__decorate([
    common_1.Put('forms/:id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, form_model_1.formModel]),
    __metadata("design:returntype", Promise)
], FormController.prototype, "updateEmployeeById", null);
__decorate([
    common_1.Post('forms'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [form_model_1.formModel]),
    __metadata("design:returntype", Promise)
], FormController.prototype, "createEmployee", null);
FormController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [form_service_1.FormService])
], FormController);
exports.FormController = FormController;
//# sourceMappingURL=form.controller.js.map