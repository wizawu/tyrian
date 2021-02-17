import { spawnSync } from "child_process"

export function javap() {
  spawnSync("javap")
}
