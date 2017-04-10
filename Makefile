.PHONY: build test watch clean

build:
	1c install
	tsc -d -p .

watch:
	tsc -d -p . -w

test: build
	1c build
	ls build/test/*Test | xargs -I {} 1c run {}

clean:
	rm -rf build lib node_modules
