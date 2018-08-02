declare namespace sun {
    namespace nio {
        namespace cs {
            namespace ext {
class COMPOUND_TEXT_Encoder extends java.nio.charset.CharsetEncoder {
    public constructor(arg0: java.nio.charset.Charset)
    protected encodeLoop(arg0: java.nio.CharBuffer | java.nio.CharBuffer$$Lambda, arg1: java.nio.ByteBuffer): java.nio.charset.CoderResult
    protected implFlush(arg0: java.nio.ByteBuffer): java.nio.charset.CoderResult
    protected implReset(): void
    public canEncode(arg0: char): boolean
    protected implOnMalformedInput(arg0: java.nio.charset.CodingErrorAction): void
    protected implOnUnmappableCharacter(arg0: java.nio.charset.CodingErrorAction): void
    protected implReplaceWith(arg0: byte[]): void
    public static class: java.lang.Class<any>
}

            }
        }
    }
}