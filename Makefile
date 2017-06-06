.PHONY: test

FLAGS=--noUnusedLocals --removeComments --strictNullChecks --outDir dist

build:
	tsc ${FLAGS} src/main.ts

watch:
	tsc ${FLAGS} -w src/main.ts

types: build
	\@types/build.sh

test: build
	./bin/1c help
	./bin/1c version
	./bin/1c env
	cd example && ../bin/1c install
	cd example && ../bin/1c build -c dist main.ts module.ts
	cd example && ../bin/1c build -c dist -m -u module.ts
	cd example && ../bin/1c build -o dist/main.js main.ts
