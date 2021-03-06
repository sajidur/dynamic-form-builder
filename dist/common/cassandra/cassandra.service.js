"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CassandraService = void 0;
const common_1 = require("@nestjs/common");
const express_cassandra_1 = require("@iaminfinity/express-cassandra");
let CassandraService = class CassandraService {
    createExpressCassandraOptions() {
        return this.dbConfig();
    }
    dbConfig() {
        return {
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
                migration: 'alter',
            },
        };
    }
};
CassandraService = __decorate([
    common_1.Injectable()
], CassandraService);
exports.CassandraService = CassandraService;
//# sourceMappingURL=cassandra.service.js.map