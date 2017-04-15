.PHONY: build test watch clean install

build: install
	tsc -d -p .

watch:
	tsc -d -p . -w

test: build
	1c build
	ls build/Test* | xargs -I {} 1c run {}

clean:
	rm -rf build lib node_modules tsconfig.json

install: clean
	1c install
