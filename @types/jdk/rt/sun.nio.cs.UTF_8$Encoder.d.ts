declare namespace sun {
    namespace nio {
        namespace cs {
class UTF_8$Encoder extends java.nio.charset.CharsetEncoder implements sun.nio.cs.ArrayEncoder {
    public canEncode(arg0: char): boolean
    public isLegalReplacement(arg0: byte[]): boolean
    protected encodeLoop(arg0: java.nio.CharBuffer | java.nio.CharBuffer$$Lambda, arg1: java.nio.ByteBuffer): java.nio.charset.CoderResult
    protected implReplaceWith(arg0: byte[]): void
    public encode(arg0: char[], arg1: int, arg2: int, arg3: byte[]): int
    public static class: java.lang.Class<any>
}

class UTF_8$Encoder$$Lambda extends java.nio.charset.CharsetEncoder implements sun.nio.cs.ArrayEncoder {
    public (arg0: char): boolean
}

        }
    }
}