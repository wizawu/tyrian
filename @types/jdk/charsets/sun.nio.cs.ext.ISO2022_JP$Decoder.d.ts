declare namespace sun {
    namespace nio {
        namespace cs {
            namespace ext {
                class ISO2022_JP$Decoder extends java.nio.charset.CharsetDecoder implements sun.nio.cs.ext.DelegatableDecoder {
                    protected constructor(arg0: java.nio.charset.Charset, arg1: sun.nio.cs.ext.DoubleByte$Decoder, arg2: sun.nio.cs.ext.DoubleByte$Decoder)
                    public implReset(): void
                    public decodeLoop(arg0: java.nio.ByteBuffer, arg1: java.nio.CharBuffer): java.nio.charset.CoderResult
                    public implFlush(arg0: java.nio.CharBuffer): java.nio.charset.CoderResult
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}