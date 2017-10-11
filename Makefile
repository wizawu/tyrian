.PHONY: build test

build: clean
	tsc -d -p . --outDir build
	mv build/src dist

watch:
	tsc -d -p . --outDir build -w

build/test:
	1c build test/test_*.ts

watch/test:
	1c build -w test/test_*.ts

test: build build/test
	1c run test_index.js

clean:
	rm -rf build dist
