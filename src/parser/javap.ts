import { spawnSync } from "child_process"

export function disassemble(classPaths: string[], classList: string[]): string | null {
  const child = spawnSync(process.env.JAVAP || "javap", [
    "-package",
    "-cp", ":" + classPaths.join(":"),
    ...classList
  ])
  if (child.status === 0) {
    return child.stdout
  } else {
    console.error(child.stderr.toString())
    return null
  }
}
