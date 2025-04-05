"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getId = void 0;
const node_crypto_1 = __importDefault(require("node:crypto"));
const getId = () => node_crypto_1.default.randomUUID();
exports.getId = getId;
