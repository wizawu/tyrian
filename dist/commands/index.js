"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const build_1 = __importDefault(require("./build"));
const init_1 = __importDefault(require("./init"));
const install_1 = __importDefault(require("./install"));
const run_1 = __importDefault(require("./run"));
exports.default = {
    build: build_1.default,
    init: init_1.default,
    install: install_1.default,
    run: run_1.default,
};
