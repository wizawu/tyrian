declare namespace sun {
    namespace misc {
        class UCDecoder extends sun.misc.CharacterDecoder {
            public constructor()
            protected bytesPerAtom(): int
            protected bytesPerLine(): int
            protected decodeAtom(arg0: java.io.PushbackInputStream, arg1: java.io.OutputStream, arg2: int): void
            protected decodeBufferPrefix(arg0: java.io.PushbackInputStream, arg1: java.io.OutputStream): void
            protected decodeLinePrefix(arg0: java.io.PushbackInputStream, arg1: java.io.OutputStream): int
            protected decodeLineSuffix(arg0: java.io.PushbackInputStream, arg1: java.io.OutputStream): void
            public static class: java.lang.Class<any>
        }
    }
}