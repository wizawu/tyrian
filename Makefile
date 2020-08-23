.PHONY: classes

classes:
	find jdk/src -name classes -type d \
		| xargs -I{} sh -c "cd {} && find . -name '*.java'" \
		| grep '^\.\(/\w\+\)\+\.java' \
		| sed -e 's/^\.\/\(.*\)\.java/\1/g' \
		| xargs -I{} echo "mkdir -p $$""(dirname classes/{}) && javap {} > classes/{}.class" \
		| parallel -I{} -t -j 400% sh -c "{}" 2>&1 | tee -a classes.log
