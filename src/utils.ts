import { spawnSync, SpawnSyncReturns } from "child_process"

export function runCommand(command: string, args: string[]): SpawnSyncReturns<Buffer> {
    return spawnSync(command, args, { stdio: "pipe" })
}
