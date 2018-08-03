declare namespace sun {
    namespace nio {
        namespace cs {
            namespace ext {
                class EUC_JP$Encoder extends java.nio.charset.CharsetEncoder {
                    protected constructor(arg0: java.nio.charset.Charset)
                    protected constructor(arg0: java.nio.charset.Charset, arg1: float, arg2: float, arg3: sun.nio.cs.SingleByte$Encoder, arg4: sun.nio.cs.ext.DoubleByte$Encoder, arg5: sun.nio.cs.ext.DoubleByte$Encoder)
                    public canEncode(arg0: char): boolean
                    protected encodeSingle(arg0: char, arg1: byte[]): int
                    protected encodeDouble(arg0: char): int
                    protected encodeLoop(arg0: java.nio.CharBuffer, arg1: java.nio.ByteBuffer): java.nio.charset.CoderResult
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}