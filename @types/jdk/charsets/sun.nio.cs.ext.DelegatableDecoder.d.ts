declare namespace sun {
    namespace nio {
        namespace cs {
            namespace ext {
                interface DelegatableDecoder {
                    decodeLoop(arg0: java.nio.ByteBuffer, arg1: java.nio.CharBuffer | java.nio.CharBuffer$$Lambda): java.nio.charset.CoderResult
                    implReset(): void
                    implFlush(arg0: java.nio.CharBuffer | java.nio.CharBuffer$$Lambda): java.nio.charset.CoderResult
                }
            }
        }
    }
}