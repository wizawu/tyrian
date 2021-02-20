"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var build_1 = __importDefault(require("./build"));
var env_1 = __importDefault(require("./env"));
var install_1 = __importDefault(require("./install"));
var run_1 = __importDefault(require("./run"));
exports.default = {
    build: build_1.default,
    env: env_1.default,
    install: install_1.default,
    run: run_1.default,
};
