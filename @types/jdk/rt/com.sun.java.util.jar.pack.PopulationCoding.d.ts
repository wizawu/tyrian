declare namespace com {
    namespace sun {
        namespace java {
            namespace util {
                namespace jar {
                    namespace pack {
                        class PopulationCoding implements com.sun.java.util.jar.pack.CodingMethod {
                            public setFavoredValues(arg0: int[], arg1: int): void
                            public setFavoredValues(arg0: int[]): void
                            public setHistogram(arg0: com.sun.java.util.jar.pack.Histogram): void
                            public setL(arg0: int): void
                            public static fitTokenCoding(arg0: int, arg1: int): com.sun.java.util.jar.pack.Coding
                            public setFavoredCoding(arg0: com.sun.java.util.jar.pack.CodingMethod): void
                            public setTokenCoding(arg0: com.sun.java.util.jar.pack.CodingMethod): void
                            public setUnfavoredCoding(arg0: com.sun.java.util.jar.pack.CodingMethod): void
                            public favoredValueMaxLength(): int
                            public resortFavoredValues(): void
                            public getToken(arg0: int): int
                            public encodeValues(arg0: int[], arg1: int, arg2: int): int[][]
                            public writeArrayTo(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: int[], arg2: int, arg3: int): void
                            public readArrayFrom(arg0: java.io.InputStream, arg1: int[], arg2: int, arg3: int): void
                            public getMetaCoding(arg0: com.sun.java.util.jar.pack.Coding | com.sun.java.util.jar.pack.Coding$$Lambda): byte[]
                            public static parseMetaCoding(arg0: byte[], arg1: int, arg2: com.sun.java.util.jar.pack.Coding | com.sun.java.util.jar.pack.Coding$$Lambda, arg3: com.sun.java.util.jar.pack.CodingMethod[]): int
                            public toString(): string
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}