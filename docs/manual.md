---
layout: default
---

## Manual

### 1. Setup your environment

* Make sure you have `gradle`(>= 5.0) and `npm`(>= 6.0) in your executable path.
* Download `OpenJDK 11` or `GraalVM`(Java 11 based) and extract it.
* Install tyrian from NPM registry.
    ```sh
    npm install -g tyrian
    ```

### 2. Command line interface

You can view the usage of all commands as follow.

```sh
tyrian help init        # initialize a project
tyrian help install     # install dependencies in package.json
tyrian help build       # build entry files such as main.ts
tyrian help run         # run the build output such as main.js
```

### 3. mvnDependencies

You must specify the exact version for each Maven dependency in `package.json`. Versions like `^1.2.3`, `~1.2.3` and `1.2.x` are NOT allowed.

```json
{
  "mvnDependencies": {
    "com.github.ben-manes.caffeine:caffeine": "3.0.1", // Good
    "com.google.code.gson:gson": "^2.7"                // Bad
  }
}
```

### 4. Import Java classes

Here are some examples.

```ts
const { Files, Paths } = java.nio.file
const HttpURLConnection = java.net.HttpURLConnection

type Raven = com.getsentry.raven.Raven
const raven: Raven = RavenFactory.ravenInstance("DSN")
```

### 5. Runtime comparison

| Runtime | Graal.js | Nashorn |
| --- | --- | --- |
| Node.js official API | Yes | No |
| Java multi-threading | No | Yes |
| Inspector | Yes | No |

### 6. Limitations

* Overloaded Java function is not supported well, specially when it is generic.
