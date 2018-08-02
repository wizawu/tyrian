declare namespace sun {
    namespace nio {
        namespace cs {
            namespace ext {
class COMPOUND_TEXT_Decoder extends java.nio.charset.CharsetDecoder {
    public constructor(arg0: java.nio.charset.Charset)
    protected decodeLoop(arg0: java.nio.ByteBuffer, arg1: java.nio.CharBuffer | java.nio.CharBuffer$$Lambda): java.nio.charset.CoderResult
    protected implFlush(arg0: java.nio.CharBuffer | java.nio.CharBuffer$$Lambda): java.nio.charset.CoderResult
    protected implReset(): void
    protected implOnMalformedInput(arg0: java.nio.charset.CodingErrorAction): void
    protected implOnUnmappableCharacter(arg0: java.nio.charset.CodingErrorAction): void
    protected implReplaceWith(arg0: java.lang.String | string): void
    public static class: java.lang.Class<any>
}

            }
        }
    }
}