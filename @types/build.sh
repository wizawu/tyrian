#!/bin/bash

dir=$(cd $(dirname $0) && pwd)
set -xe

# build jdk

cd $dir/jdk

rm -f ../isLambda.js && touch ../isLambda.js

jars=$(find $JAVA_HOME -name "*.jar" | grep -v sa-jdi.jar | grep -v tools.jar)

node -e "require('$dir/../dist/compiler/parseJAR').generateJDKDefinition()" $jars

ls *.d.ts | grep -v index.d.ts | xargs -I {} echo "/// <reference path=\"{}\" />" > index.d.ts

# run test

cd $dir
tsc --noEmit --skipLibCheck test.ts
