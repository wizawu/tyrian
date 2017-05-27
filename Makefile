.PHONY: build test watch clean install

build: install
	tsc -d -p . --outDir dist

watch:
	tsc -d -p . --outDir dist -w

install: clean
	1c install

clean:
	rm -rf build lib node_modules tsconfig.json

test: build
	1c build test/TestMySQLConnection.j.ts
	1c run build/TestMySQLConnection.js
