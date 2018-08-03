declare namespace sun {
    namespace nio {
        namespace cs {
            namespace ext {
                class SJIS_0213$Encoder extends java.nio.charset.CharsetEncoder {
                    protected static readonly UNMAPPABLE: int
                    protected static readonly MAX_SINGLEBYTE: int
                    protected constructor(arg0: java.nio.charset.Charset)
                    public canEncode(arg0: char): boolean
                    protected encodeChar(arg0: char): int
                    protected encodeSurrogate(arg0: char, arg1: char): int
                    protected encodeComposite(arg0: char, arg1: char): int
                    protected isCompositeBase(arg0: char): boolean
                    protected encodeArrayLoop(arg0: java.nio.CharBuffer, arg1: java.nio.ByteBuffer): java.nio.charset.CoderResult
                    protected encodeBufferLoop(arg0: java.nio.CharBuffer, arg1: java.nio.ByteBuffer): java.nio.charset.CoderResult
                    protected encodeLoop(arg0: java.nio.CharBuffer, arg1: java.nio.ByteBuffer): java.nio.charset.CoderResult
                    protected implFlush(arg0: java.nio.ByteBuffer): java.nio.charset.CoderResult
                    protected implReset(): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}