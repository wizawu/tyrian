declare namespace sun {
    namespace nio {
        namespace cs {
            abstract class UnicodeDecoder extends java.nio.charset.CharsetDecoder {
                protected static readonly BYTE_ORDER_MARK: char
                protected static readonly REVERSED_MARK: char
                protected static readonly NONE: int
                protected static readonly BIG: int
                protected static readonly LITTLE: int
                public constructor(arg0: java.nio.charset.Charset, arg1: int)
                public constructor(arg0: java.nio.charset.Charset, arg1: int, arg2: int)
                protected decodeLoop(arg0: java.nio.ByteBuffer, arg1: java.nio.CharBuffer): java.nio.charset.CoderResult
                protected implReset(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}