declare namespace sun {
    namespace nio {
        namespace cs {
abstract class UnicodeDecoder extends java.nio.charset.CharsetDecoder {
    protected static BYTE_ORDER_MARK: char
    protected static REVERSED_MARK: char
    protected static NONE: int
    protected static BIG: int
    protected static LITTLE: int
    public constructor(arg0: java.nio.charset.Charset, arg1: int)
    public constructor(arg0: java.nio.charset.Charset, arg1: int, arg2: int)
    protected decodeLoop(arg0: java.nio.ByteBuffer, arg1: java.nio.CharBuffer | java.nio.CharBuffer$$Lambda): java.nio.charset.CoderResult
    protected implReset(): void
    public static class: java.lang.Class<any>
}

        }
    }
}