.PHONY: test

FLAGS=--noUnusedLocals --removeComments --strictNullChecks --outDir dist

build:
	tsc ${FLAGS} src/main.ts

watch:
	tsc ${FLAGS} -w src/main.ts

types: build
	\@types/build.sh

test:
	./bin/1c help
	./bin/1c version
	./bin/1c env
	cd test && ../bin/1c install
	cd test && ../bin/1c build -c dist main.ts module.ts
	cd test && ../bin/1c build -c dist -m module.ts
	cd test && ../bin/1c build -o dist/main.js main.ts
