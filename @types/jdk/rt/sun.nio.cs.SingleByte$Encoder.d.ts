declare namespace sun {
    namespace nio {
        namespace cs {
            class SingleByte$Encoder extends java.nio.charset.CharsetEncoder implements sun.nio.cs.ArrayEncoder {
                public constructor(arg0: java.nio.charset.Charset, arg1: char[], arg2: char[])
                public canEncode(arg0: char): boolean
                public isLegalReplacement(arg0: byte[]): boolean
                protected encodeLoop(arg0: java.nio.CharBuffer | java.nio.CharBuffer$$Lambda, arg1: java.nio.ByteBuffer): java.nio.charset.CoderResult
                public encode(arg0: char): int
                protected implReplaceWith(arg0: byte[]): void
                public encode(arg0: char[], arg1: int, arg2: int, arg3: byte[]): int
                public static class: java.lang.Class<any>
            }
            class SingleByte$Encoder$$Lambda extends java.nio.charset.CharsetEncoder implements sun.nio.cs.ArrayEncoder {
                public constructor(arg0: java.nio.charset.Charset, arg1: char[], arg2: char[])
            }
        }
    }
}