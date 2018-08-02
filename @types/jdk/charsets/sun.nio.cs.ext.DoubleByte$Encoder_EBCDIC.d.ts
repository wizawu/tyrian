declare namespace sun {
    namespace nio {
        namespace cs {
            namespace ext {
                class DoubleByte$Encoder_EBCDIC extends sun.nio.cs.ext.DoubleByte$Encoder {
                    protected currentState: int
                    protected implReset(): void
                    protected implFlush(arg0: java.nio.ByteBuffer): java.nio.charset.CoderResult
                    protected encodeArrayLoop(arg0: java.nio.CharBuffer | java.nio.CharBuffer$$Lambda, arg1: java.nio.ByteBuffer): java.nio.charset.CoderResult
                    protected encodeBufferLoop(arg0: java.nio.CharBuffer | java.nio.CharBuffer$$Lambda, arg1: java.nio.ByteBuffer): java.nio.charset.CoderResult
                    public encode(arg0: char[], arg1: int, arg2: int, arg3: byte[]): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}