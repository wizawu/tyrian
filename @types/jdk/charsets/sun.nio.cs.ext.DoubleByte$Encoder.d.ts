declare namespace sun {
    namespace nio {
        namespace cs {
            namespace ext {
class DoubleByte$Encoder extends java.nio.charset.CharsetEncoder implements sun.nio.cs.ArrayEncoder {
    protected repl: byte[]
    protected constructor(arg0: java.nio.charset.Charset, arg1: char[], arg2: char[])
    public canEncode(arg0: char): boolean
    protected encodeArrayLoop(arg0: java.nio.CharBuffer | java.nio.CharBuffer$$Lambda, arg1: java.nio.ByteBuffer): java.nio.charset.CoderResult
    protected encodeBufferLoop(arg0: java.nio.CharBuffer | java.nio.CharBuffer$$Lambda, arg1: java.nio.ByteBuffer): java.nio.charset.CoderResult
    protected encodeLoop(arg0: java.nio.CharBuffer | java.nio.CharBuffer$$Lambda, arg1: java.nio.ByteBuffer): java.nio.charset.CoderResult
    protected implReplaceWith(arg0: byte[]): void
    public encode(arg0: char[], arg1: int, arg2: int, arg3: byte[]): int
    public encodeChar(arg0: char): int
    public static class: java.lang.Class<any>
}

class DoubleByte$Encoder$$Lambda extends java.nio.charset.CharsetEncoder implements sun.nio.cs.ArrayEncoder {
    protected repl: byte[]
}

            }
        }
    }
}