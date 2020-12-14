jdk-list:
	find jdk/src -name classes -type d \
		| xargs -I{} sh -c "cd {} && find . -name '*.java'" \
		| grep '^\.\(/\w\+\)\+\.java' \
		| sed -e 's/^\.\/\(.*\)\.java/\1/g' \
		| sort -u > jdk.list
