declare namespace sun {
    namespace misc {
        abstract class CharacterDecoder {
            public constructor()
            protected bytesPerAtom(): int
            protected bytesPerLine(): int
            protected decodeBufferPrefix(arg0: java.io.PushbackInputStream, arg1: java.io.OutputStream): void
            protected decodeBufferSuffix(arg0: java.io.PushbackInputStream, arg1: java.io.OutputStream): void
            protected decodeLinePrefix(arg0: java.io.PushbackInputStream, arg1: java.io.OutputStream): int
            protected decodeLineSuffix(arg0: java.io.PushbackInputStream, arg1: java.io.OutputStream): void
            protected decodeAtom(arg0: java.io.PushbackInputStream, arg1: java.io.OutputStream, arg2: int): void
            protected readFully(arg0: java.io.InputStream, arg1: byte[], arg2: int, arg3: int): int
            public decodeBuffer(arg0: java.io.InputStream, arg1: java.io.OutputStream): void
            public decodeBuffer(arg0: java.lang.String | string): byte[]
            public decodeBuffer(arg0: java.io.InputStream): byte[]
            public decodeBufferToByteBuffer(arg0: java.lang.String | string): java.nio.ByteBuffer
            public decodeBufferToByteBuffer(arg0: java.io.InputStream): java.nio.ByteBuffer
            public static class: java.lang.Class<any>
        }
    }
}