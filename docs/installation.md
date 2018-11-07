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

[node](https://nodejs.org/en/download)
v8.12.0

[npm](npm install -g npm)
6.4.1

[java](http://openjdk.java.net/install)
openjdk version "1.8.0_192"
OpenJDK Runtime Environment (build 1.8.0_192-201809300329-b03)
Eclipse OpenJ9 VM (build openj9-0.10.0-rc1, JRE 1.8.0 Linux amd64-64-Bit
OpenJ9   - c5018466
OMR      - 9ef5a533
JCL      - 84cb836f68 based on jdk8u192-b03)
jjs      - nashorn full version 1.8.0_192-201809300329-b03
javap    - /usr/lib/jvm/default-java/bin/javap
jar      - /usr/lib/jvm/default-java/bin/jar

[gradle](https://gradle.org/install)
------------------------------------------------------------
Gradle 3.5.1
------------------------------------------------------------
Build time:   2017-06-16 14:36:27 UTC
Revision:     d4c3bb4eac74bd0a3c70a0d213709e484193e251
Groovy:       2.4.10
Ant:          Apache Ant(TM) version 1.9.6 compiled on June 29 2015
JVM:          1.8.0_192 (Eclipse OpenJ9 openj9-0.10.0-rc1)
OS:           Linux 4.9.0-7-amd64 amd64

```
