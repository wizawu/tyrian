/// <reference types="node" />
import { SpawnSyncReturns } from "child_process";
export declare function runCommand(command: string, args: string[]): SpawnSyncReturns<Buffer>;
