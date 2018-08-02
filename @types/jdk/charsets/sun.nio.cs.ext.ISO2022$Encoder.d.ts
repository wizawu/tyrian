declare namespace sun {
    namespace nio {
        namespace cs {
            namespace ext {
class ISO2022$Encoder extends java.nio.charset.CharsetEncoder {
    public static SS2: byte
    public static PLANE2: byte
    public static PLANE3: byte
    protected maximumDesignatorLength: byte
    protected SODesig: string
    protected SS2Desig: string
    protected SS3Desig: string
    protected ISOEncoder: java.nio.charset.CharsetEncoder
    protected constructor(arg0: java.nio.charset.Charset)
    public canEncode(arg0: char): boolean
    protected implReset(): void
    protected encodeLoop(arg0: java.nio.CharBuffer | java.nio.CharBuffer$$Lambda, arg1: java.nio.ByteBuffer): java.nio.charset.CoderResult
    public static class: java.lang.Class<any>
}

            }
        }
    }
}