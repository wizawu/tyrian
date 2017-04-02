import * as fs from "fs"

export function version(libdir: string) {
    return JSON.parse(fs.readFileSync(`${libdir}/package.json`).toString()).version
}

export function help(libdir: string, exit: number) {
    console.log(`Version: ${version(libdir)}`)
    console.log("Usage:");
    console.log("  1c env");
    console.log("  1c init");
    console.log("  1c install");
    console.log("  1c build");
    console.log("  1c watch");
    console.log("  1c run build/<outfile>");
    console.log("  1c version");
    console.log("  1c help");

    process.exit(exit)
}