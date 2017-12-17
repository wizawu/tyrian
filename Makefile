build: clean
	tsc -d -p . --outDir dist

watch:
	tsc -d -p . --outDir dist -w

clean:
	rm -rf dist
