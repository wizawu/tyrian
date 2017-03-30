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
var tsconfig = `
{
  "compilerOptions": {
    "jsx": "react",
    "lib": ["dom", "es2017"],
    "target": "es5",
    "typeRoots": [
      "lib/@types",
      "node_modules/@types",
      "src/js/@types"
    ]
  }
}
`.trim()

// .gitignore
var gitignore = `
.gradle
build
build.gradle
lib
node_modules
tsconfig.json
yarn.lock
`.trim()

function init() {
    ["build", "lib", "lib/@types", "node_modules", "src"].forEach(function(dir) {
        console.log("mkdir " + dir)
        try {
            fs.mkdirSync(dir)
        } catch (err) {
            console.error(err.message)
        }
    });
    ["assets", "assets/img", "css", "html", "js", "js/entry", "js/@types"].forEach(function(dir) {
        console.log("mkdir src/" + dir)
        try {
            fs.mkdirSync("src/" + dir)
        } catch (err) {
            console.error(err.message)
        }
    });

    [
        ["package.json", package],
        ["tsconfig.json", tsconfig],
        [".gitignore", gitignore],
        ["src/assets/test.txt", ""],
        ["src/assets/img/test.jpg", ""],
        ["src/css/test.less", ""],
        ["src/html/test.html", "<!DOCTYPE html>"],
        ["src/js/entry/test.tsx", `import "../../css/test.less"`],
        ["src/js/entry/test.j.ts", `org.pmw.tinylog.Logger.info(java.lang.System.getProperty("java.version"))`],
        ["src/js/@types/test.d.ts", "declare const java: any"],
    ].forEach(function(args) {
        console.log("create " + args[0])
        fs.writeFile(args[0], args[1], function(err) {
            if (err) console.log(err.message)
        })
    })
}

module.exports = init