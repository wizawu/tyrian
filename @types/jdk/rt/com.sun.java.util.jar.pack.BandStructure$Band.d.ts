declare namespace com {
    namespace sun {
        namespace java {
            namespace util {
                namespace jar {
                    namespace pack {
abstract class BandStructure$Band {
    protected outputSize: long
    public regularCoding: com.sun.java.util.jar.pack.Coding
    public seqForDebug: int
    public elementCountForDebug: int
    protected lengthForDebug: int
    protected constructor(arg0: com.sun.java.util.jar.pack.BandStructure, arg1: java.lang.String | string, arg2: com.sun.java.util.jar.pack.Coding | com.sun.java.util.jar.pack.Coding$$Lambda)
    public init(): com.sun.java.util.jar.pack.BandStructure$Band
    public capacity(): int
    protected setCapacity(arg0: int): void
    public length(): int
    protected valuesRemainingForDebug(): int
    public valuesExpected(): int
    public writeTo(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
    public outputSize(): long
    protected computeOutputSize(): long
    protected writeDataTo(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
    protected doneWriting(): void
    public readFrom(arg0: java.io.InputStream): void
    protected readDataFrom(arg0: java.io.InputStream): void
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