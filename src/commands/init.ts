import * as chalk from "chalk"
import * as fs from "fs"

// package.json
const PACKAGE_JSON = `
{
  "dependencies": {
    "mockxhr": "^1.3.0"
  },
  "mvnDependencies": [
    "org.tinylog:tinylog:1.2"
  ]
}
`.trim()

// .gitignore
const _GITIGNORE = `
build
lib
node_modules
tsconfig.json
yarn.lock
`.trim()

// tsconfig.json
export const tsconfig = (instdir, noJDK = false) => JSON.stringify({
    "compilerOptions": {
        "jsx": "react",
        "lib": ["dom", "es2017"],
        "noUnusedLocals": true,
        "removeComments": true,
        "skipLibCheck": true,
        "sourceMap": true,
        "strictNullChecks": true,
        "target": "es5",
        "typeRoots": [
            `${instdir}/@types`,
            "lib/@types",
            "node_modules/@types",
            "src/js/@types"
        ].slice(noJDK ? 1 : 0)
    },
    "include": [
        `${instdir}/@types/**/*.d.ts`,
        "lib/@types/**/*.d.ts",
        "src/**/*.ts",
        "src/**/*.tsx"
    ].slice(noJDK ? 1 : 0)
}, null, 2)

export default function (instdir: string) {
    ["build", "build/assets", "lib", "node_modules", "src"].forEach(dir => {
        try {
            fs.mkdirSync(dir)
            console.log(chalk.green("mkdir " + dir))
        } catch (err) {
            if (err.code === "EEXIST") {
                console.error(chalk.yellow(err.message))
            } else {
                console.error(chalk.red(err.message))
            }
        }
    });
    ["assets", "assets/img", "css", "html", "js", "js/@types"].forEach(dir => {
        try {
            fs.mkdirSync("src/" + dir)
            console.log(chalk.green("mkdir src/" + dir))
        } catch (err) {
            if (err.code === "EEXIST") {
                console.error(chalk.yellow(err.message))
            } else {
                console.error(chalk.red(err.message))
            }
        }
    });

    [
        ["package.json", PACKAGE_JSON],
        ["tsconfig.json", tsconfig(instdir)],
        [".gitignore", _GITIGNORE],
        ["src/assets/todo.txt", ""],
        ["src/assets/img/blank.jpg", ""],
        ["src/css/index.less", "body { display: flex }"],
        ["src/html/index.html", "<!DOCTYPE html>"],
        ["src/js/index.tsx", `import "../css/index.less"`],
        ["src/js/main.j.ts", `org.pmw.tinylog.Logger.info(java.lang.System.getProperty("java.version"))`],
        ["src/js/@types/common.d.ts", ""],
    ].forEach(([path, content]: string[]) => {
        if (!fs.existsSync(path)) {
            try {
                fs.writeFileSync(path, content)
                console.log(chalk.green("create " + path))
            } catch (err) {
                if (err.code === "EEXIST") {
                    console.error(chalk.yellow(err.message))
                } else {
                    console.error(chalk.red(err.message))
                }
            }
        }
    })
}
