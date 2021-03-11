GRAALVM_TAR=https://github.com/graalvm/graalvm-ce-builds/releases/download/vm-21.0.0.2/graalvm-ce-java11-linux-amd64-21.0.0.2.tar.gz
TYRIAN_BIN=../../bin/tyrian

test:
	mkdir -p /tmp/graalvm-ce
	wget -qO- ${GRAALVM_TAR} | tar zxf - -C /tmp/graalvm-ce/ --strip-components=1
	${TYRIAN_BIN} install
	${TYRIAN_BIN} build main.ts
	${TYRIAN_BIN} run main.js
