.PHONY: build types

build:
	tsc --noUnusedLocals --removeComments --strictNullChecks src/main.ts

types: build
	\@types/build.sh
