declare namespace sun {
    namespace nio {
        namespace cs {
            namespace ext {
                class ISO2022_JP$Encoder extends java.nio.charset.CharsetEncoder {
                    protected encodeSingle(arg0: char): int
                    protected implReset(): void
                    protected implReplaceWith(arg0: byte[]): void
                    protected implFlush(arg0: java.nio.ByteBuffer): java.nio.charset.CoderResult
                    public canEncode(arg0: char): boolean
                    protected encodeLoop(arg0: java.nio.CharBuffer | java.nio.CharBuffer$$Lambda, arg1: java.nio.ByteBuffer): java.nio.charset.CoderResult
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}