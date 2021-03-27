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
exports.questions = void 0;
const express_cassandra_1 = require("@iaminfinity/express-cassandra");
let questions = class questions {
};
__decorate([
    express_cassandra_1.GeneratedUUidColumn(),
    __metadata("design:type", Object)
], questions.prototype, "id", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'text',
    }),
    __metadata("design:type", String)
], questions.prototype, "code", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'text',
    }),
    __metadata("design:type", String)
], questions.prototype, "descriptions", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'int',
    }),
    __metadata("design:type", Number)
], questions.prototype, "controlTypeId", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'text',
    }),
    __metadata("design:type", String)
], questions.prototype, "controlTypeName", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'int',
    }),
    __metadata("design:type", Number)
], questions.prototype, "parent_questions_id", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'int',
    }),
    __metadata("design:type", Number)
], questions.prototype, "questions_level", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'boolean',
    }),
    __metadata("design:type", Boolean)
], questions.prototype, "is_mandatory", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'text',
    }),
    __metadata("design:type", String)
], questions.prototype, "inputvalidation", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'boolean',
    }),
    __metadata("design:type", Boolean)
], questions.prototype, "is_condition", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'int',
    }),
    __metadata("design:type", Number)
], questions.prototype, "order_no", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'text',
    }),
    __metadata("design:type", String)
], questions.prototype, "set_formula", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'boolean',
    }),
    __metadata("design:type", Boolean)
], questions.prototype, "is_enable_score", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'boolean',
    }),
    __metadata("design:type", Boolean)
], questions.prototype, "each_item_calculation", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'int',
    }),
    __metadata("design:type", Number)
], questions.prototype, "weight_value", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'text',
    }),
    __metadata("design:type", String)
], questions.prototype, "app_id", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'uuid',
    }),
    __metadata("design:type", String)
], questions.prototype, "form_id", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'text',
    }),
    __metadata("design:type", String)
], questions.prototype, "company_id", void 0);
questions = __decorate([
    express_cassandra_1.Entity({
        table_name: 'questions',
        key: ['id'],
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
], questions);
exports.questions = questions;
//# sourceMappingURL=questions.entity.js.map