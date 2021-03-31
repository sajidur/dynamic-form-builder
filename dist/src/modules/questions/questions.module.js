"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionsModule = void 0;
const questions_controller_1 = require("./questions.controller");
const common_1 = require("@nestjs/common");
const express_cassandra_1 = require("@iaminfinity/express-cassandra");
const questions_entity_1 = require("./entity/questions.entity");
const conditions_entity_1 = require("./entity/conditions.entity");
const options_entity_1 = require("./entity/options.entity");
const questions_service_1 = require("../Questions/questions.service");
let QuestionsModule = class QuestionsModule {
};
QuestionsModule = __decorate([
    common_1.Module({
        imports: [express_cassandra_1.ExpressCassandraModule.forFeature([questions_entity_1.questions, conditions_entity_1.conditions, options_entity_1.options]),],
        controllers: [questions_controller_1.QuestionsController],
        providers: [questions_service_1.QuestionsService
        ],
        exports: [questions_service_1.QuestionsService
        ]
    })
], QuestionsModule);
exports.QuestionsModule = QuestionsModule;
//# sourceMappingURL=questions.module.js.map