.PHONY: test

build: install
	tsc -d -p . --outDir dist

watch:
	tsc -d -p . --outDir dist -w

install: clean
	1c install

clean:
	rm -rf build lib node_modules tsconfig.json yarn.lock

test/build:
	1c build src/test_jdbc.j.ts

test/watch:
	1c build -w src/test_jdbc.j.ts

test/run:
	1c run build/test_jdbc.js

test: build test/build test/run

profile:
	PROFILE_SQL=true make test/run 2>&1 | grep duration | sort -rnk 14
