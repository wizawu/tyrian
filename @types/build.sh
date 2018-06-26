#!/bin/bash

dir=$(cd $(dirname $0) && pwd)
set -xe

# create a new isLambda.js

rm -f $dir/../dist/parser/isLambda.js
touch $dir/../dist/parser/isLambda.js

# build jdk

cd $dir/jdk

jars=$(find $dir/../jars/openjdk -name "*.jar")

node -e "require('$dir/../dist/parser/parseJAR').generateJDKDefinition('$dir/..')" $jars

ls *.d.ts | grep -v index.d.ts | xargs -I {} echo "/// <reference path=\"{}\" />" > index.d.ts

# run test

test=/tmp/1c@types_test.ts

echo "/// <reference path='$dir/index.d.ts' />" > $test
grep -h "declare namespace" *.d.ts | sort | uniq | awk '{print $3}' | xargs -I {} echo "Boolean({})" >> $test

tsc --noEmit --skipLibCheck $test
