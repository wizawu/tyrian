declare namespace sun {
    namespace nio {
        namespace cs {
            namespace ext {
                class EUC_TW$Encoder extends java.nio.charset.CharsetEncoder {
                    public constructor(arg0: java.nio.charset.Charset)
                    public canEncode(arg0: char): boolean
                    public canEncode(arg0: java.lang.CharSequence): boolean
                    public toEUC(arg0: char, arg1: char, arg2: byte[]): int
                    public toEUC(arg0: char, arg1: byte[]): int
                    protected encodeLoop(arg0: java.nio.CharBuffer | java.nio.CharBuffer$$Lambda, arg1: java.nio.ByteBuffer): java.nio.charset.CoderResult
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}