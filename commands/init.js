var fs = require("fs")

// package.json
var package = `
{
  "dependencies": {
    "mockxhr": "^1.3.0"
  },
  "mvnDependencies": [
    "org.tinylog:tinylog:1.2"
  ]
}
`.trim()

// tsconfig.json
var tsconfig = function(context) { return `
{
  "compilerOptions": {
    "jsx": "react",
    "lib": ["dom", "es2017"],
    "target": "es5",
    "typeRoots": [
      "${context}/js/@types",
      "${context}/node_modules/@types"
    ]
  }
}
`.trim() }

// .gitignore
var gitignore = `
.gradle
build
build.gradle
dist
lib
node_modules
tsconfig.json
yarn.lock
`.trim()

function init(context) {
    ["build", "dist", "lib", "node_modules", "src"].forEach(function(dir) {
        console.log("mkdir " + dir)
        try {
            fs.mkdirSync(dir)
        } catch (err) {
            console.error(err.message)
        }
    });
    ["assets", "css", "html", "js", "js/entry", "js/@types"].forEach(function(dir) {
        console.log("mkdir src/" + dir)
        try {
            fs.mkdirSync("src/" + dir)
        } catch (err) {
            console.error(err.message)
        }
    });

    [
        ["package.json", package],
        ["tsconfig.json", tsconfig(context)],
        [".gitignore", gitignore],
        ["src/assets/useless.txt", ""],
        ["src/css/index.less", ""],
        ["src/html/index.html", "<!DOCTYPE html>"],
        ["src/js/entry/index.tsx", `import "../../css/index.less"`],
        ["src/js/entry/main.j.ts", `print("Hello, world!")`],
        ["src/js/@types/main.d.ts", "declare const print: any"],
    ].forEach(function(args) {
        console.log("create " + args[0])
        fs.writeFile(args[0], args[1], function(err) {
            if (err) console.log(err.message)
        })
    })
}

module.exports = init