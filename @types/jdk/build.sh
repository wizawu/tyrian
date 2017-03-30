#!/bin/bash

cd $(dirname $0)

find $JAVA_HOME -name "*.jar" | parallel -I{} -j4 --no-notice --line-buffer node ../build.js {}
