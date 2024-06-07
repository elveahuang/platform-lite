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
exports.AuthorityEntity = void 0;
const base_entity_1 = require("../../../../commons/entity/base.entity");
const typeorm_1 = require("typeorm");
let AuthorityEntity = class AuthorityEntity extends base_entity_1.BaseEntity {
    parentId;
    code;
    title;
    label;
    description;
    type;
    idx;
    status;
    source;
};
exports.AuthorityEntity = AuthorityEntity;
__decorate([
    (0, typeorm_1.Column)({ name: 'parent_id', comment: '父ID', type: 'bigint' }),
    __metadata("design:type", BigInt)
], AuthorityEntity.prototype, "parentId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'code', comment: '编号' }),
    __metadata("design:type", String)
], AuthorityEntity.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'title', comment: '标题' }),
    __metadata("design:type", String)
], AuthorityEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'label', comment: '文本' }),
    __metadata("design:type", String)
], AuthorityEntity.prototype, "label", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'description', comment: '备注' }),
    __metadata("design:type", String)
], AuthorityEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'type', comment: '类型' }),
    __metadata("design:type", String)
], AuthorityEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'idx', comment: '序号' }),
    __metadata("design:type", Number)
], AuthorityEntity.prototype, "idx", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'status', comment: '状态' }),
    __metadata("design:type", Number)
], AuthorityEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'source', comment: '来源' }),
    __metadata("design:type", Number)
], AuthorityEntity.prototype, "source", void 0);
exports.AuthorityEntity = AuthorityEntity = __decorate([
    (0, typeorm_1.Entity)('sys_authority')
], AuthorityEntity);
//# sourceMappingURL=authority.entity.js.map