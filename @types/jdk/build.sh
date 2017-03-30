#!/bin/bash

cd $(dirname $1)

find $JAVA_HOME -name "*.jar" | parallel -I{} -j4 --no-notice --line-buffer node ../build.js {}
