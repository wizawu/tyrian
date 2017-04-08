.PHONY: build test watch clean

watch:
	tsc -d -p . -w

build:
	1c install
	tsc -d -p .

test: build
	1c build
	ls build/test/*Test | xargs -I {} 1c run {}

clean:
	rm -rf build lib node_modules
