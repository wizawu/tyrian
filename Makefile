build: clean
	tsc -d -p build.tsconfig.json --outDir dist

watch:
	1c build -w -c test/dist test/*.ts

clean:
	rm -rf dist
