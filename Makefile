build: clean
	tsc -d -p build.tsconfig.json --outDir dist

clean:
	rm -rf dist
