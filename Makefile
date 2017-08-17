.PHONY: test

build:
	tsc -d -p . --outDir dist

watch:
	tsc -d -p . --outDir dist -w

install: clean
	1c install

clean:
	rm -rf lib node_modules tsconfig.json yarn.lock

build/test:
	1c build test/test_mysql.ts

watch/test:
	1c build -w test/test_mysql.ts

run/test:
	1c run test_mysql.js

test: build build/test run/test

profile:
	PROFILE_SQL=true make run/test 2>&1
