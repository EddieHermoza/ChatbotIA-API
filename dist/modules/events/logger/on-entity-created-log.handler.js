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
exports.OnEntityCreatedLogHandler = void 0;
const logger_service_1 = require("../../logger/logger.service");
const common_1 = require("@nestjs/common");
const event_emitter_1 = require("@nestjs/event-emitter");
const client_1 = require("@prisma/client");
const logger_events_interfaces_1 = require("./logger-events.interfaces");
let OnEntityCreatedLogHandler = class OnEntityCreatedLogHandler {
    constructor(logger) {
        this.logger = logger;
    }
    async handleCreated(payload) {
        const { session, entityId } = payload;
        await this.logger.createEntityLog(session, client_1.Entity.User, entityId);
    }
};
exports.OnEntityCreatedLogHandler = OnEntityCreatedLogHandler;
__decorate([
    (0, event_emitter_1.OnEvent)(logger_events_interfaces_1.LoggerEvents.USER_CREATED_EVENT),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OnEntityCreatedLogHandler.prototype, "handleCreated", null);
exports.OnEntityCreatedLogHandler = OnEntityCreatedLogHandler = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [logger_service_1.LoggerService])
], OnEntityCreatedLogHandler);
//# sourceMappingURL=on-entity-created-log.handler.js.map