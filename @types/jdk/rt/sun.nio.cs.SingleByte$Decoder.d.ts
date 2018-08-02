declare namespace sun {
    namespace nio {
        namespace cs {
            class SingleByte$Decoder extends java.nio.charset.CharsetDecoder implements sun.nio.cs.ArrayDecoder {
                public constructor(arg0: java.nio.charset.Charset, arg1: char[])
                protected decodeLoop(arg0: java.nio.ByteBuffer, arg1: java.nio.CharBuffer | java.nio.CharBuffer$$Lambda): java.nio.charset.CoderResult
                public decode(arg0: int): char
                protected implReplaceWith(arg0: java.lang.String | string): void
                public decode(arg0: byte[], arg1: int, arg2: int, arg3: char[]): int
                public static class: java.lang.Class<any>
            }
            class SingleByte$Decoder$$Lambda extends java.nio.charset.CharsetDecoder implements sun.nio.cs.ArrayDecoder {
                public constructor(arg0: java.nio.charset.Charset, arg1: char[])
            }
        }
    }
}