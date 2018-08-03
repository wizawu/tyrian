declare namespace sun {
    namespace nio {
        namespace cs {
            namespace ext {
                class HKSCS$Encoder extends sun.nio.cs.ext.DoubleByte$Encoder {
                    protected constructor(arg0: java.nio.charset.Charset, arg1: sun.nio.cs.ext.DoubleByte$Encoder, arg2: char[][], arg3: char[][])
                    public encodeBig5(arg0: char): int
                    public encodeChar(arg0: char): int
                    public encodeSupp(arg0: int): int
                    public canEncode(arg0: char): boolean
                    protected encodeArrayLoop(arg0: java.nio.CharBuffer, arg1: java.nio.ByteBuffer): java.nio.charset.CoderResult
                    protected encodeBufferLoop(arg0: java.nio.CharBuffer, arg1: java.nio.ByteBuffer): java.nio.charset.CoderResult
                    protected encodeLoop(arg0: java.nio.CharBuffer, arg1: java.nio.ByteBuffer): java.nio.charset.CoderResult
                    protected implReplaceWith(arg0: byte[]): void
                    public encode(arg0: char[], arg1: int, arg2: int, arg3: byte[]): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}