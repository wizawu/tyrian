declare namespace sun {
    namespace nio {
        namespace cs {
            namespace ext {
                class JISAutoDetect$Decoder extends java.nio.charset.CharsetDecoder {
                    public constructor(arg0: java.nio.charset.Charset)
                    protected decodeLoop(arg0: java.nio.ByteBuffer, arg1: java.nio.CharBuffer | java.nio.CharBuffer$$Lambda): java.nio.charset.CoderResult
                    protected implReset(): void
                    protected implFlush(arg0: java.nio.CharBuffer | java.nio.CharBuffer$$Lambda): java.nio.charset.CoderResult
                    public isAutoDetecting(): boolean
                    public isCharsetDetected(): boolean
                    public detectedCharset(): java.nio.charset.Charset
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}