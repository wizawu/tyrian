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
	rm -rf test/dist
	cd test && ../bin/1c install
	cd test && ../bin/1c build -c dist -u main.ts
	cd test && ../bin/1c build -o dist/test.js nashorn.ts
	cd test && ../bin/1c run dist/test.js
	test -f test/dist/main.js
