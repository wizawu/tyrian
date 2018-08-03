declare namespace java {
    namespace io {
        class BufferedInputStream extends java.io.FilterInputStream {
            protected buf: byte[]
            protected count: int
            protected pos: int
            protected markpos: int
            protected marklimit: int
            public constructor(arg0: java.io.InputStream | java.io.InputStream$$Lambda)
            public constructor(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: int)
            public read(): int
            public read(arg0: byte[], arg1: int, arg2: int): int
            public skip(arg0: long): long
            public available(): int
            public mark(arg0: int): void
            public reset(): void
            public markSupported(): boolean
            public close(): void
            public static class: java.lang.Class<any>
        }
    }
}