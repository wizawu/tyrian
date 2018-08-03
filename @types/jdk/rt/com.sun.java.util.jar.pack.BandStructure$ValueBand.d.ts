declare namespace com {
    namespace sun {
        namespace java {
            namespace util {
                namespace jar {
                    namespace pack {
                        class BandStructure$ValueBand extends com.sun.java.util.jar.pack.BandStructure$Band {
                            protected constructor(arg0: com.sun.java.util.jar.pack.BandStructure | com.sun.java.util.jar.pack.BandStructure$$Lambda, arg1: java.lang.String | string, arg2: com.sun.java.util.jar.pack.Coding)
                            public capacity(): int
                            protected setCapacity(arg0: int): void
                            public length(): int
                            protected valuesRemainingForDebug(): int
                            protected valueAtForDebug(arg0: int): int
                            protected initializeValues(arg0: int[]): void
                            protected addValue(arg0: int): void
                            protected chooseBandCodings(): void
                            protected computeOutputSize(): long
                            protected computeEscapeSize(): int
                            protected writeDataTo(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                            protected readDataFrom(arg0: java.io.InputStream | java.io.InputStream$$Lambda): void
                            public doneDisbursing(): void
                            protected getValue(): int
                            public resetForSecondPass(): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}