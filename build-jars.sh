#!/bin/sh

mkdir -p jars
cd jars
git clone --depth 1 https://github.com/wizawu/openjdk.git
cd openjdk
find src/ -type d -name 'classes' \
    | grep 'share/classes' \
    | awk -F'/' '{print $2}' \
    | xargs -I{} jar cvf {}.jar -C src/{}/share/classes/ .
