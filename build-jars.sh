#!/bin/sh

mkdir -p jars
cd jars

wget -nc -O openjdk.tgz http://hg.openjdk.java.net/jdk/jdk/archive/tip.tar.bz2
root=$(tar tf openjdk.tgz | head -1 | sed -e 's/\/.*//')
tar xf openjdk.tgz --wildcards $root/src/java.* $root/src/jdk.*

mv $root openjdk
cd openjdk

find src/ -type d -name 'classes' \
    | grep 'share/classes' \
    | awk -F'/' '{print $2}' \
    | xargs -I{} jar cvf {}.jar -C src/{}/share/classes/ .
