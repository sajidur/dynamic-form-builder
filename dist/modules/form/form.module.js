"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormModule = void 0;
const form_service_1 = require("./form.service");
const form_controller_1 = require("./form.controller");
const common_1 = require("@nestjs/common");
const express_cassandra_1 = require("@iaminfinity/express-cassandra");
const conditions_entity_1 = require("./conditions.entity");
const form_Entity_1 = require("./form.Entity");
let FormModule = class FormModule {
};
FormModule = __decorate([
    common_1.Module({
        imports: [express_cassandra_1.ExpressCassandraModule.forFeature([form_Entity_1.forms, conditions_entity_1.conditions]),],
        controllers: [form_controller_1.FormController],
        providers: [
            form_service_1.FormService
        ],
        exports: [
            form_service_1.FormService
        ]
    })
], FormModule);
exports.FormModule = FormModule;
//# sourceMappingURL=form.module.js.map