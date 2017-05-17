#!/bin/bash

dir=$(cd $(dirname $0) && pwd)
set -xe

# create a new isLambda.js

rm -f $dir/../src/compiler/isLambda.js
touch $dir/../src/compiler/isLambda.js

# build jdk

cd $dir/jdk

jars=$(find $JAVA_HOME -name "*.jar" | grep -v sa-jdi.jar | grep -v tools.jar)

node -e "require('$dir/../dist/compiler/parseJAR').generateJDKDefinition('$dir/..')" $jars

ls *.d.ts | grep -v index.d.ts | xargs -I {} echo "/// <reference path=\"{}\" />" > index.d.ts

# run test

cd $dir
tsc --noEmit --skipLibCheck test.ts
