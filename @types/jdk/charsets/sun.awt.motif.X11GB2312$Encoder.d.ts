declare namespace sun {
    namespace awt {
        namespace motif {
            class X11GB2312$Encoder extends java.nio.charset.CharsetEncoder {
                public constructor(arg0: sun.awt.motif.X11GB2312, arg1: java.nio.charset.Charset)
                public canEncode(arg0: char): boolean
                protected encodeDouble(arg0: char): int
                protected encodeLoop(arg0: java.nio.CharBuffer, arg1: java.nio.ByteBuffer): java.nio.charset.CoderResult
                public isLegalReplacement(arg0: byte[]): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}