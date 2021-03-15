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
const cassandra_driver_1 = require("cassandra-driver");
let CassandraService = class CassandraService {
    createClient() {
        this.client = new cassandra_driver_1.Client({
            contactPoints: ['0.0.0.0'],
            keyspace: 'employeedb',
            localDataCenter: 'datacenter1',
            authProvider: new cassandra_driver_1.auth.PlainTextAuthProvider('cassandra', 'cassandra')
        });
    }
    createMapper(mappingOptions) {
        if (this.client == undefined) {
            this.createClient();
        }
        return new cassandra_driver_1.mapping.Mapper(this.client, mappingOptions);
    }
};
CassandraService = __decorate([
    common_1.Injectable()
], CassandraService);
exports.CassandraService = CassandraService;
//# sourceMappingURL=cassandra.service.js.map