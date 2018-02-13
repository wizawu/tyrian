build: clean
	tsc -d -p build.tsconfig.json --outDir dist

watch:
	1c build -w -c test/dist test/*.ts

test: build
	1c build -c test/dist test/*.ts
	1c run test/dist/model.js

clean:
	rm -rf dist
