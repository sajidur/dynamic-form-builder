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
const cassandra_service_1 = require("./common/cassandra/cassandra.service");
const cassandra_module_1 = require("./common/cassandra/cassandra.module");
const form_Entity_1 = require("./modules/form/form.Entity");
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
            express_cassandra_1.ExpressCassandraModule.forFeature([form_Entity_1.forms], 'dbcon'),
            form_module_1.FormModule,
        ],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map