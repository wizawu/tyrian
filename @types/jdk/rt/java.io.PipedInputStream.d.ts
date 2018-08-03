declare namespace java {
    namespace io {
        class PipedInputStream extends java.io.InputStream {
            protected static readonly PIPE_SIZE: int
            protected buffer: byte[]
            protected in: int
            protected out: int
            public constructor(arg0: java.io.PipedOutputStream)
            public constructor(arg0: java.io.PipedOutputStream, arg1: int)
            public constructor()
            public constructor(arg0: int)
            public connect(arg0: java.io.PipedOutputStream): void
            protected receive(arg0: int): void
            public read(): int
            public read(arg0: byte[], arg1: int, arg2: int): int
            public available(): int
            public close(): void
            public static class: java.lang.Class<any>
        }
    }
}