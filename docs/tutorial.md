---
layout: default
---

## Tutorial

### help

You can have a quick look at the following commands.

```
1c help
```

### env

Check everything you need before using 1c to build your project.

```
1c env
```

### install

Add the NPM and Maven libraries you need to `package.json`.

```bash
$ cat package.json
{
  "dependencies": {
    "mockxhr": "^1.3.0"
  },
  "mvnDependencies": [
    "org.tinylog:tinylog:1.2"
  ]
}

$ 1c install
npm WARN wizawu.com No repository field.
npm WARN wizawu.com No license field.
up to date in 0.4s

BUILD SUCCESSFUL

Total time: 4.019 secs
Disassembling lib/tinylog-1.2.jar: 83 classes
Generated lib/@types/tinylog-1.2.d.ts
```

Now you have installed both NPM and Maven dependencies. We will only use `tinylog` in this tutorial.

`tsconfig.json` will be also generated after running `1c install`. So you can import the directory to IDE (VS Code, WebStorm, etc) now.

### build

Edit `main.ts` as follow.

```typescript
const JAVA_VERSION = java.lang.System.getProperty("java.version")
org.pmw.tinylog.Logger.info(`Java version ${JAVA_VERSION}`)
```

Build the entry.

```bash
$ 1c build main.ts
ts-loader: Using typescript@2.3.4 and /home/wizawu/new/tsconfig.json
Hash: a224cd98aa0291534c77
Time: 6514ms
      Asset       Size  Chunks             Chunk Names
    main.js  703 bytes       0  [emitted]  main.js
main.js.map  839 bytes       0  [emitted]  main.js
```

### run

Now you are ready to run your first program with 1c.

```bash
$ 1c run main.js
2017-04-27 02:35:57 [main] jdk.nashorn.internal.scripts.Script$Recompilation.L:71()
INFO: Java version 1.8.0_77-Debian
```
