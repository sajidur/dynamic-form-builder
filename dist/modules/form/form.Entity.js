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
exports.forms = void 0;
const express_cassandra_1 = require("@iaminfinity/express-cassandra");
let forms = class forms {
};
__decorate([
    express_cassandra_1.GeneratedUUidColumn(),
    __metadata("design:type", Object)
], forms.prototype, "id", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'text',
    }),
    __metadata("design:type", String)
], forms.prototype, "form_name", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'text',
    }),
    __metadata("design:type", String)
], forms.prototype, "descriptions", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'int',
    }),
    __metadata("design:type", Number)
], forms.prototype, "questions_per_page", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'text',
    }),
    __metadata("design:type", String)
], forms.prototype, "header_image", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'boolean',
    }),
    __metadata("design:type", Boolean)
], forms.prototype, "is_active", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'boolean',
    }),
    __metadata("design:type", Boolean)
], forms.prototype, "is_published", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'uuid',
    }),
    __metadata("design:type", String)
], forms.prototype, "app_id", void 0);
__decorate([
    express_cassandra_1.Column({
        type: 'uuid',
    }),
    __metadata("design:type", String)
], forms.prototype, "company_id", void 0);
forms = __decorate([
    express_cassandra_1.Entity({
        table_name: 'forms',
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
], forms);
exports.forms = forms;
//# sourceMappingURL=form.Entity.js.map