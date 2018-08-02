declare namespace sun {
    namespace awt {
        namespace datatransfer {
            class DataTransferer$ReencodingInputStream extends java.io.InputStream {
                protected wrapped: java.io.BufferedReader
                protected in: char[]
                protected out: byte[]
                protected encoder: java.nio.charset.CharsetEncoder
                protected inBuf: java.nio.CharBuffer
                protected outBuf: java.nio.ByteBuffer
                protected eoln: char[]
                protected numTerminators: int
                protected eos: boolean
                protected index: int
                protected limit: int
                public constructor(arg0: sun.awt.datatransfer.DataTransferer, arg1: java.io.InputStream, arg2: long, arg3: java.lang.String | string, arg4: java.awt.datatransfer.Transferable)
                public read(): int
                public available(): int
                public close(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}