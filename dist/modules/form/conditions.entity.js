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
Object.defineProperty(exports, "__esModule", { value: true });
exports.conditions = void 0;
const express_cassandra_1 = require("@iaminfinity/express-cassandra");
let conditions = class conditions {
};
__decorate([
    express_cassandra_1.GeneratedUUidColumn(),
    __metadata("design:type", Object)
], conditions.prototype, "id", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'text',
    }),
    __metadata("design:type", String)
], conditions.prototype, "name", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'int',
    }),
    __metadata("design:type", Number)
], conditions.prototype, "compare_value_to", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'uuid',
    }),
    __metadata("design:type", Object)
], conditions.prototype, "form_id", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'int',
    }),
    __metadata("design:type", Number)
], conditions.prototype, "order_no", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'text',
    }),
    __metadata("design:type", String)
], conditions.prototype, "logical_operator", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'int',
    }),
    __metadata("design:type", Number)
], conditions.prototype, "compare_value_with", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'int',
    }),
    __metadata("design:type", Number)
], conditions.prototype, "action_type", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'uuid',
    }),
    __metadata("design:type", Object)
], conditions.prototype, "target_id", void 0);
conditions = __decorate([
    express_cassandra_1.Entity({
        table_name: 'conditions',
        key: [['target_id'], 'id'],
        options: {
            timestamps: {
                createdAt: 'created_at',
                updatedAt: 'updated_at',
            },
            versions: {
                key: '__v1',
            },
        },
    })
], conditions);
exports.conditions = conditions;
//# sourceMappingURL=conditions.entity.js.map