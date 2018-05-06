/// <reference types="chalk" />
import Chalk from "chalk";
export declare const Color: Chalk.Chalk;
export declare class Logger {
    static info(message: string): void;
    static warn(message: string): void;
    static error(message: string): void;
}
