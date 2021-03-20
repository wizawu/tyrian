.PHONY: graaljs nashorn

GRAALVM_TAR=https://github.com/graalvm/graalvm-ce-builds/releases/download/vm-21.0.0.2/graalvm-ce-java11-linux-amd64-21.0.0.2.tar.gz
OPENJDK_TAR=https://github.com/AdoptOpenJDK/openjdk11-binaries/releases/download/jdk-11.0.10%2B9/OpenJDK11U-jdk_x64_linux_hotspot_11.0.10_9.tar.gz
TYRIAN_BIN=../../../bin/tyrian

test: graaljs nashorn

graaljs:
	mkdir -p /tmp/graalvm-ce
	wget -qO- ${GRAALVM_TAR} | tar zxf - -C /tmp/graalvm-ce/ --strip-components=1
	cd graaljs && ${TYRIAN_BIN} install
	cd graaljs && ${TYRIAN_BIN} build main.ts
	cd graaljs && ${TYRIAN_BIN} run main.js

nashorn:
	mkdir -p /tmp/openjdk
	wget -qO- ${OPENJDK_TAR} | tar zxf - -C /tmp/openjdk/ --strip-components=1
	cd nashorn && ${TYRIAN_BIN} install
	cd nashorn && ${TYRIAN_BIN} build main.ts
	cd nashorn && ${TYRIAN_BIN} run main.js
