import * as fs from "fs"

export function version(instdir: string) {
    return JSON.parse(fs.readFileSync(`${instdir}/package.json`).toString()).version
}

export function help(instdir: string, status: number) {
    console.log(`Version: ${version(instdir)}`)
    console.log("Usage:");
    console.log("  1c env");
    console.log("  1c init");
    console.log("  1c install");
    console.log("  1c build");
    console.log("  1c watch");
    console.log("  1c run build/<outfile>");
    console.log("  1c version");
    console.log("  1c help");

    process.exit(status)
}
