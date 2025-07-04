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
exports.RequestChatDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class RequestChatDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { conversation_id: { required: true, type: () => String, format: "uuid" }, message: { required: true, type: () => String, minLength: 2, maxLength: 1000 }, topic_id: { required: true, type: () => String, format: "uuid" } };
    }
}
exports.RequestChatDto = RequestChatDto;
__decorate([
    (0, class_validator_1.IsUUID)(7, {
        message: 'El id de la conversacion debe ser un uuid version 7 ',
    }),
    __metadata("design:type", String)
], RequestChatDto.prototype, "conversation_id", void 0);
__decorate([
    (0, class_validator_1.Length)(2, 1000, {
        message: 'El mensaje debe tener entre 2 y 1000 caracteres',
    }),
    (0, class_validator_1.IsString)({ message: 'El mensaje debe ser un texto' }),
    __metadata("design:type", String)
], RequestChatDto.prototype, "message", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(7, {
        message: 'El id del tópico elegido debe ser un uuid version 7 ',
    }),
    __metadata("design:type", String)
], RequestChatDto.prototype, "topic_id", void 0);
//# sourceMappingURL=request-chat.dto.js.map