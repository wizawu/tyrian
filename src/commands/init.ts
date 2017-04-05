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
.gradle
build
build.gradle
lib
node_modules
tsconfig.json
yarn.lock
`.trim()

// tsconfig.json
const tsconfig = instdir => `
{
  "compilerOptions": {
    "jsx": "react",
    "lib": ["dom", "es2017"],
    "skipLibCheck": true,
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
    ["build", "lib", "node_modules", "src"].forEach(dir => {
        try {
            fs.mkdirSync(dir)
            console.log("mkdir " + dir)
        } catch (err) {
            if (err.code !== "EEXIST") console.error(err.message)
        }
    });
    ["assets", "assets/img", "css", "html", "js", "js/entry", "js/@types"].forEach(dir => {
        try {
            fs.mkdirSync("src/" + dir)
            console.log("mkdir src/" + dir)
        } catch (err) {
            if (err.code !== "EEXIST") console.error(err.message)
        }
    });

    [
        ["package.json", PACKAGE_JSON],
        ["tsconfig.json", tsconfig(instdir)],
        [".gitignore", _GITIGNORE],
        ["src/assets/test.txt", ""],
        ["src/assets/img/test.jpg", ""],
        ["src/css/test.less", "body { dislpay: flex }"],
        ["src/html/test.html", "<!DOCTYPE html>"],
        ["src/js/entry/test.tsx", `import "../../css/test.less"`],
        ["src/js/entry/test.j.ts", `org.pmw.tinylog.Logger.info(java.lang.System.getProperty("java.version"))`],
        ["src/js/@types/test.d.ts", ""],
    ].forEach(([path, content]: string[]) => {
        if (!fs.existsSync(path)) {
            try {
                fs.writeFileSync(path, content)
                console.log("create " + path)
            } catch (err) {
                console.error(err.message)
            }
        }
    })
}
