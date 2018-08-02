declare namespace sun {
    namespace nio {
        namespace cs {
            namespace ext {
                class ISO2022$Decoder extends java.nio.charset.CharsetDecoder {
                    protected SODesig: byte[][]
                    protected SS2Desig: byte[][]
                    protected SS3Desig: byte[][]
                    protected SODecoder: java.nio.charset.CharsetDecoder[]
                    protected SS2Decoder: java.nio.charset.CharsetDecoder[]
                    protected SS3Decoder: java.nio.charset.CharsetDecoder[]
                    protected constructor(arg0: java.nio.charset.Charset)
                    protected implReset(): void
                    protected decodeLoop(arg0: java.nio.ByteBuffer, arg1: java.nio.CharBuffer | java.nio.CharBuffer$$Lambda): java.nio.charset.CoderResult
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}