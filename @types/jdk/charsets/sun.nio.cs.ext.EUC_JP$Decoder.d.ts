declare namespace sun {
    namespace nio {
        namespace cs {
            namespace ext {
class EUC_JP$Decoder extends java.nio.charset.CharsetDecoder implements sun.nio.cs.ext.DelegatableDecoder {
    protected constructor(arg0: java.nio.charset.Charset)
    protected constructor(arg0: java.nio.charset.Charset, arg1: float, arg2: float, arg3: sun.nio.cs.SingleByte$Decoder | sun.nio.cs.SingleByte$Decoder$$Lambda, arg4: sun.nio.cs.ext.DoubleByte$Decoder | sun.nio.cs.ext.DoubleByte$Decoder$$Lambda, arg5: sun.nio.cs.ext.DoubleByte$Decoder | sun.nio.cs.ext.DoubleByte$Decoder$$Lambda)
    protected decodeDouble(arg0: int, arg1: int): char
    public decodeLoop(arg0: java.nio.ByteBuffer, arg1: java.nio.CharBuffer | java.nio.CharBuffer$$Lambda): java.nio.charset.CoderResult
    public implReset(): void
    public implFlush(arg0: java.nio.CharBuffer | java.nio.CharBuffer$$Lambda): java.nio.charset.CoderResult
    public static class: java.lang.Class<any>
}

            }
        }
    }
}