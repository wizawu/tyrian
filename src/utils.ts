import { spawnSync } from "child_process"

export function runCommand(command: string, args: string[]) {
    return spawnSync(command, args, { stdio: "pipe" })
}
