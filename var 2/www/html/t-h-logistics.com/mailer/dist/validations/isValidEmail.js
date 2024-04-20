"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const isValidEmail = (data) => {
    const schema = joi_1.default.object({
        name: joi_1.default.string().min(1).max(64512).required(),
        body: joi_1.default.string().min(1).max(64512).required(),
        locale: joi_1.default.string().required(),
        email: joi_1.default.string().email({ tlds: { allow: true } }).required(),
    });
    return schema.validate(data);
};
exports.default = isValidEmail;
