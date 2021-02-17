import { spawnSync } from "child_process"

export function disassemble(classPaths: string[], classList: string[]): string | null {
  const child = spawnSync("javap", [
    "-package",
    "-cp", ":" + classPaths.join(":"),
    ...classList
  ])
  if (child.status === 0) {
    return child.stdout
  } else {
    return null
  }
}
