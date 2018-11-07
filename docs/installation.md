---
layout: default
---

## Installation

1c is developed and tested under Debian. There might be unknown issues if you use it on Windows or Mac OS.

You should install the following dependencies before using 1c. You can run `1c env` to check if they are installed correctly.

* Node >= 6.0.0
* NPM >= 5.0.0
* Java 8 (Prefer OpenJ9 > OpenJDK > Oracle HotSpot)
* Gradle >= 3.0.0

```bash
# install 1c
$ npm install -g 1c

# check dependencies
$ 1c env

[node](https://nodejs.org/en/download/)
v6.10.2

[npm](npm install -g npm)
5.3.0

[java](http://openjdk.java.net/install/)
openjdk version "1.8.0_77-Debian"
OpenJDK Runtime Environment (build 1.8.0_77-Debian-8u77-b03-3+b1-b1)
OpenJDK 64-Bit Server VM (build 25.77-b1, mixed mode)
jjs -> nashorn full version 1.8.0_77-Debian-8u77-b03-3+b1-b1
javap -> /usr/lib/jvm/default-jdk/bin/javap
jar -> /usr/lib/jvm/default-jdk/bin/jar

[gradle](https://gradle.org/install)

------------------------------------------------------------
Gradle 3.2.1
------------------------------------------------------------

Build time:   2016-11-22 15:19:54 UTC
Revision:     83b485b914fd4f335ad0e66af9d14aad458d2cc5

Groovy:       2.4.7
Ant:          Apache Ant(TM) version 1.9.6 compiled on June 29 2015
JVM:          1.8.0_77-Debian (Oracle Corporation 25.77-b1)
OS:           Linux 4.5.0-1-amd64 amd64
```
