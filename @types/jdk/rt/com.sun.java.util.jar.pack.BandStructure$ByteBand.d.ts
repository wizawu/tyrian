declare namespace com {
    namespace sun {
        namespace java {
            namespace util {
                namespace jar {
                    namespace pack {
                        class BandStructure$ByteBand extends com.sun.java.util.jar.pack.BandStructure$Band {
                            public constructor(arg0: com.sun.java.util.jar.pack.BandStructure, arg1: java.lang.String | string)
                            public capacity(): int
                            protected setCapacity(arg0: int): void
                            public destroy(): void
                            public length(): int
                            public reset(): void
                            protected valuesRemainingForDebug(): int
                            protected chooseBandCodings(): void
                            protected computeOutputSize(): long
                            public writeDataTo(arg0: java.io.OutputStream): void
                            public readDataFrom(arg0: java.io.InputStream): void
                            public readyToDisburse(): void
                            public doneDisbursing(): void
                            public setInputStreamFrom(arg0: java.io.InputStream): void
                            public collectorStream(): java.io.OutputStream
                            public getInputStream(): java.io.InputStream
                            public getByte(): int
                            public putByte(arg0: int): void
                            public toString(): string
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}