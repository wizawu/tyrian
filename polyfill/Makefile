build: clean
	tsc -d -p tsconfig.build.json --outDir dist

test: build
	1c build -c test/ test/*.ts
	ls test/*.js | xargs -I{} 1c run {}

clean:
	rm -rf dist
