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
exports.options = void 0;
const express_cassandra_1 = require("@iaminfinity/express-cassandra");
let options = class options {
};
__decorate([
    express_cassandra_1.GeneratedUUidColumn(),
    __metadata("design:type", Object)
], options.prototype, "id", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'text',
    }),
    __metadata("design:type", String)
], options.prototype, "name", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'text',
    }),
    __metadata("design:type", String)
], options.prototype, "value", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'uuid',
    }),
    __metadata("design:type", Object)
], options.prototype, "form_id", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'uuid',
    }),
    __metadata("design:type", Object)
], options.prototype, "question_id", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'int',
    }),
    __metadata("design:type", Number)
], options.prototype, "order_no", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'int',
    }),
    __metadata("design:type", Number)
], options.prototype, "score_value", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'boolean',
    }),
    __metadata("design:type", Boolean)
], options.prototype, "is_mandatory", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'boolean',
    }),
    __metadata("design:type", Boolean)
], options.prototype, "is_condition", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'boolean',
    }),
    __metadata("design:type", Boolean)
], options.prototype, "is_pre_slected", void 0);
options = __decorate([
    express_cassandra_1.Entity({
        table_name: 'options',
        key: [['question_id'], 'id'],
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
], options);
exports.options = options;
//# sourceMappingURL=options.entity.js.map