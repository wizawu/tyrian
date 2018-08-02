declare namespace sun {
    namespace nio {
        namespace cs {
            namespace ext {
class DoubleByte$Decoder extends java.nio.charset.CharsetDecoder implements sun.nio.cs.ext.DelegatableDecoder , sun.nio.cs.ArrayDecoder {
    protected crMalformedOrUnderFlow(arg0: int): java.nio.charset.CoderResult
    protected crMalformedOrUnmappable(arg0: int, arg1: int): java.nio.charset.CoderResult
    protected decodeArrayLoop(arg0: java.nio.ByteBuffer, arg1: java.nio.CharBuffer | java.nio.CharBuffer$$Lambda): java.nio.charset.CoderResult
    protected decodeBufferLoop(arg0: java.nio.ByteBuffer, arg1: java.nio.CharBuffer | java.nio.CharBuffer$$Lambda): java.nio.charset.CoderResult
    public decodeLoop(arg0: java.nio.ByteBuffer, arg1: java.nio.CharBuffer | java.nio.CharBuffer$$Lambda): java.nio.charset.CoderResult
    public decode(arg0: byte[], arg1: int, arg2: int, arg3: char[]): int
    public implReset(): void
    public implFlush(arg0: java.nio.CharBuffer | java.nio.CharBuffer$$Lambda): java.nio.charset.CoderResult
    public decodeSingle(arg0: int): char
    public decodeDouble(arg0: int, arg1: int): char
    public static class: java.lang.Class<any>
}

class DoubleByte$Decoder$$Lambda extends java.nio.charset.CharsetDecoder implements sun.nio.cs.ext.DelegatableDecoder , sun.nio.cs.ArrayDecoder {
    protected (arg0: int): java.nio.charset.CoderResult
}

            }
        }
    }
}