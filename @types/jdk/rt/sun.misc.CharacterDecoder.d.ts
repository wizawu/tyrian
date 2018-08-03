declare namespace sun {
    namespace misc {
        abstract class CharacterDecoder {
            public constructor()
            protected abstract bytesPerAtom(): int
            protected abstract bytesPerLine(): int
            protected decodeBufferPrefix(arg0: java.io.PushbackInputStream, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): void
            protected decodeBufferSuffix(arg0: java.io.PushbackInputStream, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): void
            protected decodeLinePrefix(arg0: java.io.PushbackInputStream, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): int
            protected decodeLineSuffix(arg0: java.io.PushbackInputStream, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): void
            protected decodeAtom(arg0: java.io.PushbackInputStream, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: int): void
            protected readFully(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: byte[], arg2: int, arg3: int): int
            public decodeBuffer(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): void
            public decodeBuffer(arg0: java.lang.String | string): byte[]
            public decodeBuffer(arg0: java.io.InputStream | java.io.InputStream$$Lambda): byte[]
            public decodeBufferToByteBuffer(arg0: java.lang.String | string): java.nio.ByteBuffer
            public decodeBufferToByteBuffer(arg0: java.io.InputStream | java.io.InputStream$$Lambda): java.nio.ByteBuffer
            public static class: java.lang.Class<any>
        }
    }
}