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
const swagger_1 = require("@nestjs/swagger");
let FormController = class FormController {
    constructor(formService) {
        this.formService = formService;
    }
    async getAllForm() {
        return this.formService.getForm();
    }
    async getById(id) {
        return this.formService.getForm();
    }
    async create(form) {
        return this.formService.createForm(form);
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
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FormController.prototype, "getById", null);
__decorate([
    common_1.Post('create'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [form_Entity_1.forms]),
    __metadata("design:returntype", Promise)
], FormController.prototype, "create", null);
FormController = __decorate([
    swagger_1.ApiTags('Form API'),
    common_1.Controller(),
    __metadata("design:paramtypes", [form_service_1.FormService])
], FormController);
exports.FormController = FormController;
//# sourceMappingURL=form.controller.js.map