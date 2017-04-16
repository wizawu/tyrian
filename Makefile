.PHONY: build types

FLAGS=--noUnusedLocals --removeComments --strictNullChecks

build:
	tsc ${FLAGS} src/main.ts

watch:
	tsc ${FLAGS} -w src/main.ts

types: build
	\@types/build.sh
