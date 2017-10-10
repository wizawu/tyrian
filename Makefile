.PHONY: test

build:
	tsc -d -p . --outDir dist

watch:
	tsc -d -p . --outDir dist -w

build/test:
	1c build test/test_*.ts

watch/test:
	1c build -w test/test_*.ts

test: build build/test
	1c run test_index.js
