---
layout: default
---

## What's 1c

1c is aimed to compile TypeScript to runnable code on both JVM and web browser. You can implement the full stack with TypeScript while using libraries from [Maven](https://maven.apache.org/) and [NPM](https://www.npmjs.com/) together.

To make it clear, I'd like to quote from [sparkjava.com](http://sparkjava.com/):

> Lately, a lot of server-side web development has been taken over by NodeJS, but a growing number of NodeJS developers are using TypeScript and other statically typed languages that compile to JavaScript. Why not go all the way and use **a language that was actually designed with types**, and intended to run on the server-side? You also get all the **benefits of running your application on the JVM**, where libraries aren’t deprecated every day.

Here is what 1c can offer: you can have TypeScript for the server-side and run it on the JVM.

Let's use [spark](http://sparkjava.com/) as an example.

1. Create `package.json` and run `1c install`

    ```json
    {
      "dependencies": {
        "@types/chalk": "^0.4.31",
        "chalk": "^1.1.3"
      },
      "mvnDependencies": [
        "com.sparkjava:spark-core:2.5.5",
        "org.slf4j:slf4j-simple:1.7.21"
      ]
    }
    ```

2. Create `main.ts`

    This is almost the same as the Quick Start example of spark, except that it's going to print a green Hello World with the NPM library chalk.
