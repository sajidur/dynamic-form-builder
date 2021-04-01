"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const express_cassandra_1 = require("@iaminfinity/express-cassandra");
const form_module_1 = require("./modules/form/form.module");
const questions_module_1 = require("./modules/questions/questions.module");
const cassandra_service_1 = require("./common/cassandra/cassandra.service");
const cassandra_module_1 = require("./common/cassandra/cassandra.module");
const form_Entity_1 = require("./modules/form/form.Entity");
const questions_entity_1 = require("./modules/Questions/entity/questions.entity");
const conditions_entity_1 = require("./modules/form/conditions.entity");
const options_entity_1 = require("./modules/Questions/entity/options.entity");
const app_service_1 = require("./app.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            express_cassandra_1.ExpressCassandraModule.forRootAsync({
                useClass: cassandra_service_1.CassandraService,
            }),
            express_cassandra_1.ExpressCassandraModule.forRootAsync({
                name: 'dbcon',
                imports: [cassandra_module_1.CassandraModule],
                useFactory: (config) => config.dbConfig(),
                inject: [cassandra_service_1.CassandraService],
            }),
            express_cassandra_1.ExpressCassandraModule.forFeature([form_Entity_1.forms, questions_entity_1.questions, conditions_entity_1.conditions, options_entity_1.options], 'dbcon'),
            form_module_1.FormModule, questions_module_1.QuestionsModule
        ],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map