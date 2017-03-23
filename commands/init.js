var fs = require("fs")

var build_gradle = `
apply plugin: "java"

repositories {
  mavenCentral()
}

task install(type: Copy) {
  into "lib"
  from configurations.runtime
}

dependencies {
  compile 'org.tinylog:tinylog:1.2'
}
`.trim()

var package_json = `
{
  "dependencies": {
    "mockxhr": "^1.3.0"
  }
}
`.trim()

var tsconfig_json = function(context) { return `
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

var gitignore = `
.gradle
lib
node_modules
tsconfig.json
`.trim()

function init(context) {
    ["build", "dist", "lib", "node_modules", "src"].forEach(function(dir) {
        fs.mkdir(context + "/" + dir, function(err) {
            if (err && err.code !== "EEXIST") console.error(err)
        })
    });
    ["assets", "css", "html", "js", "js/entry", "js/@types"].forEach(function(dir) {
        fs.mkdir(context + "/src/" + dir, function(err) {
            if (err && err.code !== "EEXIST") console.error(err)
        })
    });

    [
        ["build.gradle", build_gradle],
        ["package.json", package_json],
        ["tsconfig.json", tsconfig_json(context)],
        [".gitignore", gitignore],
        ["src/assets/useless.txt", ""],
        ["src/css/index.less", ""],
        ["src/html/index.html", "<!DOCTYPE html>"],
        ["src/js/entry/index.tsx", `import "../../css/index.less"`],
        ["src/js/entry/main.j.ts", ""],
        ["src/js/@types/index.d.ts", ""],
    ].forEach(function(args) {
        fs.writeFile(args[0], args[1], function(err) {
            if (err) console.log(err)
        })
    })
}

module.exports = init