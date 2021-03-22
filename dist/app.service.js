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
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const express_cassandra_1 = require("@iaminfinity/express-cassandra");
const form_Entity_1 = require("./modules/form/form.Entity");
const questions_entity_1 = require("./modules/questions/questions.entity");
let AppService = class AppService {
    constructor(connection, formModel, questionsModel) {
        this.connection = connection;
        this.formModel = formModel;
        this.questionsModel = questionsModel;
    }
};
AppService = __decorate([
    common_1.Injectable(),
    __param(0, express_cassandra_1.InjectConnection('dbcon')),
    __param(1, express_cassandra_1.InjectModel(form_Entity_1.forms)),
    __param(2, express_cassandra_1.InjectModel(questions_entity_1.questions)),
    __metadata("design:paramtypes", [Object, Object, Object])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map