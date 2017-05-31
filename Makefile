.PHONY: test

build: install
	tsc -d -p . --outDir dist

watch:
	tsc -d -p . --outDir dist -w

install: clean
	1c install

clean:
	rm -rf build lib node_modules tsconfig.json

watch/test:
	1c build -w src/test_mysql.j.ts

test:
	1c run build/test_mysql.js
