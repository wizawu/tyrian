declare namespace sun {
    namespace nio {
        namespace cs {
            abstract class UnicodeEncoder extends java.nio.charset.CharsetEncoder {
                protected static readonly BYTE_ORDER_MARK: char
                protected static readonly REVERSED_MARK: char
                protected static readonly BIG: int
                protected static readonly LITTLE: int
                protected constructor(arg0: java.nio.charset.Charset, arg1: int, arg2: boolean)
                protected encodeLoop(arg0: java.nio.CharBuffer, arg1: java.nio.ByteBuffer): java.nio.charset.CoderResult
                protected implReset(): void
                public canEncode(arg0: char): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}