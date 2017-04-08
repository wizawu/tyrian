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
*.j.d.ts
*.j.js
.gradle
build
build.gradle
lib
node_modules
tsconfig.json
yarn.lock
`.trim()

// tsconfig.json
export const tsconfig = instdir => `
{
  "compilerOptions": {
    "jsx": "react",
    "lib": ["dom", "es2017"],
    "noUnusedLocals": true,
    "removeComments": true,
    "skipLibCheck": true,
    "strictNullChecks": true,
    "target": "es5",
    "typeRoots": [
      "${instdir}/@types",
      "lib/@types",
      "node_modules/@types",
      "src/js/@types"
    ]
  },
  "include": [
    "${instdir}/@types/**/*.ts",
    "**/*.ts",
    "**/*.tsx"
  ]
}
`.trim()

export default function (instdir: string) {
    ["build", "build/assets", "build/test", "lib", "node_modules", "src", "test", "test/js"].forEach(dir => {
        try {
            fs.mkdirSync(dir)
            console.log(chalk.cyan("mkdir " + dir))
        } catch (err) {
            if (err.code === "EEXIST") {
                console.error(chalk.yellow(err.message))
            } else {
                console.error(chalk.red(err.message))
            }
        }
    });
    ["assets", "assets/img", "css", "html", "js", "js/entry", "js/@types"].forEach(dir => {
        try {
            fs.mkdirSync("src/" + dir)
            console.log(chalk.cyan("mkdir src/" + dir))
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
        ["src/css/index.less", "body { dislpay: flex }"],
        ["src/html/index.html", "<!DOCTYPE html>"],
        ["src/js/entry/index.tsx", `import "../../css/index.less"`],
        ["src/js/entry/main.j.ts", `org.pmw.tinylog.Logger.info(java.lang.System.getProperty("java.version"))`],
        ["src/js/@types/common.d.ts", ""],
        ["test/js/test.j.ts", `org.pmw.tinylog.Logger.warn("test")`],
    ].forEach(([path, content]: string[]) => {
        if (!fs.existsSync(path)) {
            try {
                fs.writeFileSync(path, content)
                console.log(chalk.cyan("create " + path))
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
