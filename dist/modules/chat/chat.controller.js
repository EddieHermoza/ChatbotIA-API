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
exports.ChatController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const validate_uuid_pipe_1 = require("../../common/pipes/validate-uuid.pipe");
const chat_service_1 = require("./chat.service");
const request_chat_dto_1 = require("./dto/request-chat.dto");
let ChatController = class ChatController {
    constructor(chatService) {
        this.chatService = chatService;
    }
    send(res, req, body) {
        res.setHeader('Content-Type', 'text/event-stream');
        res.setHeader('Cache-Control', 'no-cache');
        res.setHeader('Connection', 'keep-alive');
        const response = this.chatService.doStream(body);
        const subscription = response.subscribe({
            next: (chunk) => {
                res.write(chunk);
            },
            complete: () => {
                res.end();
            },
            error: (e) => {
                res.write(`${JSON.stringify(e)}`);
                res.end();
            },
        });
        req.on('close', () => {
            subscription.unsubscribe();
        });
    }
    async getHistory(conversationId) {
        return await this.chatService.getChathistory(conversationId);
    }
};
exports.ChatController = ChatController;
__decorate([
    (0, common_1.Post)('/send'),
    (0, swagger_1.ApiOperation)({
        summary: 'Envía un mensaje y devuelve una respuesta en tiempo real',
    }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, request_chat_dto_1.RequestChatDto]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "send", null);
__decorate([
    (0, common_1.Get)(':conversationId/get-chat-history'),
    (0, swagger_1.ApiOperation)({
        summary: 'Obtiene el historial de mensajes de una conversación',
    }),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __param(0, (0, common_1.Param)('conversationId', validate_uuid_pipe_1.ValidateUUID)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "getHistory", null);
exports.ChatController = ChatController = __decorate([
    (0, common_1.Controller)('chat'),
    __metadata("design:paramtypes", [chat_service_1.ChatService])
], ChatController);
//# sourceMappingURL=chat.controller.js.map