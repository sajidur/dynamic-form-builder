"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const form_module_1 = require("../../modules/form/form.module");
const express_cassandra_1 = require("@iaminfinity/express-cassandra");
const cassandraOptions = {
    clientOptions: {
        contactPoints: ['116.68.207.82'],
        keyspace: 'form_builder',
        protocolOptions: {
            port: 9042,
        },
        queryOptions: {
            consistency: 1,
        },
        authProvider: new express_cassandra_1.auth.PlainTextAuthProvider('cassandra', 'C@$$andrA'),
    },
    ormOptions: {
        createKeyspace: true,
        defaultReplicationStrategy: {
            class: 'SimpleStrategy',
            replication_factor: 1,
        },
        migration: 'drop',
    },
};
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    common_1.Module({
        imports: [
            express_cassandra_1.ExpressCassandraModule.forRoot(cassandraOptions), form_module_1.FormModule
        ],
        exports: [express_cassandra_1.ExpressCassandraModule],
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;
//# sourceMappingURL=database.module.js.map