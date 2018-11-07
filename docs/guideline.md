---
layout: default
---

## Guideline

### Limitations

* Although you can use Maven libraries, you are not going to write Java. If you are not interested in TypeScript, 1c is not for you.
* Because the program will be run on JVM, you CANNOT use those NPM libraries that rely on Node standard library (like fs, path).
* The TypeScript definitions generated from Maven libraries will not perfectly match to its original Java signature, since TypeScript syntax differs from Java's. But in most cases, you use those libraries in the same way as they are used in Java source.
* The compilation would be very memory-consuming (1G free memory suggested, otherwise it may get very slow). However, you can use the watch mode `-w` to reduce the time for re-compilation.

### Import Java classes

Here is some examples.

```typescript
const Files = java.nio.file.Files
const HttpURLConnection = java.net.HttpURLConnection
const Spark = spark.Spark

type Raven = com.getsentry.raven.Raven
const raven: Raven = RavenFactory.ravenInstance("DSN")
```

Check out [Java Scripting Programmer's Guide](https://docs.oracle.com/javase/8/docs/technotes/guides/scripting/prog_guide/javascript.html) for more details.

### Extra package.json fields

* `mvnDependencies` defines Maven dependencies in Gradle format.
* `webpack.optimization` and `webpack.resolve` can be overridden.

```typescript
{
  "mvnDependencies": [
    "com.sparkjava:spark-core:2.5.5",
    "org.tinylog:tinylog:1.2"
  ],
  "webpack": {
    "resolve": {
      "alias": {
        "react": "inferno-compat",
        "react-dom": "inferno-compat"
      }
    },
    "optimization": {
      "splitChunks": {
        "chunks": "all",
        "name": "common.js",
        "minChunks": 3
      }
    }
  }
}
```
