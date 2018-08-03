declare namespace java {
    namespace io {
        class PushbackInputStream extends java.io.FilterInputStream {
            protected buf: byte[]
            protected pos: int
            public constructor(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: int)
            public constructor(arg0: java.io.InputStream | java.io.InputStream$$Lambda)
            public read(): int
            public read(arg0: byte[], arg1: int, arg2: int): int
            public unread(arg0: int): void
            public unread(arg0: byte[], arg1: int, arg2: int): void
            public unread(arg0: byte[]): void
            public available(): int
            public skip(arg0: long): long
            public markSupported(): boolean
            public mark(arg0: int): void
            public reset(): void
            public close(): void
            public static class: java.lang.Class<any>
        }
    }
}