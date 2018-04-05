build: clean
	tsc -d -p tsconfig.build.json --outDir dist

clean:
	rm -rf dist
