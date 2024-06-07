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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnouncementAppController = void 0;
const anonymous_decorator_1 = require("../../../commons/decorator/anonymous.decorator");
const announcement_search_request_1 = require("../domain/request/announcement-search-request");
const announcement_service_1 = require("../service/announcement.service");
const common_1 = require("@nestjs/common");
let AnnouncementAppController = class AnnouncementAppController {
    announcementService;
    constructor(announcementService) {
        this.announcementService = announcementService;
    }
    async list(request) {
        return await this.announcementService.findAll();
    }
};
exports.AnnouncementAppController = AnnouncementAppController;
__decorate([
    (0, anonymous_decorator_1.Anonymous)(),
    (0, common_1.Post)('/list'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [announcement_search_request_1.AnnouncementSearchRequest]),
    __metadata("design:returntype", Promise)
], AnnouncementAppController.prototype, "list", null);
exports.AnnouncementAppController = AnnouncementAppController = __decorate([
    (0, common_1.Controller)('/api/announcement'),
    __metadata("design:paramtypes", [announcement_service_1.AnnouncementService])
], AnnouncementAppController);
//# sourceMappingURL=announcement.app.controller.js.map