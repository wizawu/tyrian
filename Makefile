.PHONY: test

FLAGS=--noUnusedLocals --removeComments --strictNullChecks --lib es6 -t es5 --outDir dist

build:
	tsc ${FLAGS} src/main.ts

watch:
	tsc ${FLAGS} -w src/main.ts

test:
	echo
