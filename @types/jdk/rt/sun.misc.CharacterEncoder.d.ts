declare namespace sun {
    namespace misc {
        abstract class CharacterEncoder {
            protected pStream: java.io.PrintStream
            public constructor()
            protected bytesPerAtom(): int
            protected bytesPerLine(): int
            protected encodeBufferPrefix(arg0: java.io.OutputStream): void
            protected encodeBufferSuffix(arg0: java.io.OutputStream): void
            protected encodeLinePrefix(arg0: java.io.OutputStream, arg1: int): void
            protected encodeLineSuffix(arg0: java.io.OutputStream): void
            protected encodeAtom(arg0: java.io.OutputStream, arg1: byte[], arg2: int, arg3: int): void
            protected readFully(arg0: java.io.InputStream, arg1: byte[]): int
            public encode(arg0: java.io.InputStream, arg1: java.io.OutputStream): void
            public encode(arg0: byte[], arg1: java.io.OutputStream): void
            public encode(arg0: byte[]): string
            public encode(arg0: java.nio.ByteBuffer, arg1: java.io.OutputStream): void
            public encode(arg0: java.nio.ByteBuffer): string
            public encodeBuffer(arg0: java.io.InputStream, arg1: java.io.OutputStream): void
            public encodeBuffer(arg0: byte[], arg1: java.io.OutputStream): void
            public encodeBuffer(arg0: byte[]): string
            public encodeBuffer(arg0: java.nio.ByteBuffer, arg1: java.io.OutputStream): void
            public encodeBuffer(arg0: java.nio.ByteBuffer): string
            public static class: java.lang.Class<any>
        }
    }
}