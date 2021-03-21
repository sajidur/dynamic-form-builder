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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CassandraConfig = void 0;
const express_cassandra_1 = require("@iaminfinity/express-cassandra");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let CassandraConfig = class CassandraConfig {
    constructor(configService) {
        this.configService = configService;
        this.contactpoints = this.configService.get('CASSANDRA_HOST')
            ? this.configService.get('CASSANDRA_HOST').split(',')
            : ['localhost'];
        this.keyspace = this.configService.get('CASSANDRA_KEYSPACE', 'thunder_file_resources');
        this.isAuthEnable =
            this.configService.get('CASSANDRA_AUTH', 'true') === 'true';
        this.dbUser = this.configService.get('CASSANDRA_USER', 'cassandra');
        this.dbPassword = this.configService.get('CASSANDRA_PASSWORD', 'cassandra');
    }
    createExpressCassandraOptions() {
        return {
            clientOptions: {
                contactPoints: this.contactpoints,
                keyspace: this.keyspace,
                authProvider: this.isAuthEnable
                    ? new express_cassandra_1.auth.PlainTextAuthProvider(this.dbUser, this.dbPassword)
                    : undefined,
            },
            ormOptions: { createKeyspace: true, migration: 'alter' },
        };
    }
};
CassandraConfig = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], CassandraConfig);
exports.CassandraConfig = CassandraConfig;
//# sourceMappingURL=cassandra.config.js.map