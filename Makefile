.PHONY: test

build: install
	tsc -d -p . --outDir dist

watch:
	tsc -d -p . --outDir dist -w

install: clean
	1c install

clean:
	rm -rf lib node_modules tsconfig.json yarn.lock

test/build:
	1c build test/test_mysql.ts

test/watch:
	1c build -w test/test_mysql.ts

test/run:
	1c run test_mysql.js

test: build test/build test/run

profile:
	PROFILE_SQL=true make test/run 2>&1 | grep duration | sort -rnk 14
