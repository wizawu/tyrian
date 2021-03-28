---
layout: default
---

# TypeScript on JVM

## What's tyrian

Tyrian is aimed to compile TypeScript to runnable code on JVM (and also web browser). You can program the server-side in TypeScript while using libraries from [Maven](https://maven.apache.org/) and [NPM](https://www.npmjs.com/) together.

To make it clear, I'd like to quote from [sparkjava.com](http://sparkjava.com/):

> Lately, a lot of server-side web development has been taken over by NodeJS, but a growing number of NodeJS developers are using TypeScript and other statically typed languages that compile to JavaScript. Why not go all the way and use <ins>a language that was actually designed with types</ins>, and intended to run on the server-side? You also get all the <ins>benefits of running your application on the JVM</ins>, where libraries aren’t deprecated every day.

Here is what tyrian can offer: you can have TypeScript for the server-side (like [deno](https://github.com/denoland/deno)) and run it on the JVM.

## Getting Started

Let's build a simple HTTP service, which returns colorful text.

1. Install tyrian.

    ```
    npm install -g tyrian
    ```

    Make sure you have `npm` and `gradle` installed as well. Moreover, you should download and extract one of the following JDK:
    * OpenJDK == 11
    * GraalVM >= 20 (Java 11 based)

2. Initialize an empty project.

    ```
    mkdir /tmp/app
    cd /tmp/app
    tyrian init
    ```

    You can see `package.json` and `tsconfig.json` created under the current directory. Then modify `dependencies` and `mvnDependencies` in `package.json`.

    ```json
    {
      "dependencies": {
        "ansi-styles": "^5.1.0"
      },
      "mvnDependencies": {
        "org.rapidoid:rapidoid-http-server": "5.5.5"
      },
      "runtime": {
        "graaljs": "..."
      }
    }
    ```

2. Create `main.ts`.

    ```typescript
    import { green } from "ansi-styles"
    const { App, On } = org.rapidoid.setup

    App.run(["on.port=8080"])
    On.get("/").plain(`${green.open}Hello${green.close}\n`)

    java.lang.Thread.sleep(3600 * 1000)
    ```

3. Build and run

    ```
    $ tyrian build main.ts
    asset main.js 6.2 KiB [emitted] (name: main.js)
    Entrypoint main.js 6.2 KiB = main.js
    webpack 5.28.0 compiled successfully in 5691 ms
    $ tyrian run main.js
    ```

    You can test it in command line.

    ```
    curl http://127.0.0.1:8080/
    ```

* Want to see more [examples](https://github.com/wizawu/tyrian/tree/master/examples)?

* Read the [manual](./manual) for more details.
