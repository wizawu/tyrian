declare namespace com {
    namespace sun {
        namespace java {
            namespace util {
                namespace jar {
                    namespace pack {
                        abstract class BandStructure$Band {
                            protected outputSize: long
                            public readonly regularCoding: com.sun.java.util.jar.pack.Coding
                            public readonly seqForDebug: int
                            public elementCountForDebug: int
                            protected lengthForDebug: int
                            protected constructor(arg0: com.sun.java.util.jar.pack.BandStructure | com.sun.java.util.jar.pack.BandStructure$$Lambda, arg1: java.lang.String | string, arg2: com.sun.java.util.jar.pack.Coding)
                            public init(): com.sun.java.util.jar.pack.BandStructure$Band
                            public abstract capacity(): int
                            protected abstract setCapacity(arg0: int): void
                            public abstract length(): int
                            protected abstract valuesRemainingForDebug(): int
                            public valuesExpected(): int
                            public writeTo(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                            public outputSize(): long
                            protected abstract computeOutputSize(): long
                            protected abstract writeDataTo(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                            protected doneWriting(): void
                            public readFrom(arg0: java.io.InputStream | java.io.InputStream$$Lambda): void
                            protected abstract readDataFrom(arg0: java.io.InputStream | java.io.InputStream$$Lambda): void
                            protected readyToDisburse(): void
                            public doneDisbursing(): void
                            public doneWithUnusedBand(): void
                            protected setPhase(arg0: int): void
                            public toString(): string
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}