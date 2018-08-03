declare namespace sun {
    namespace net {
        namespace www {
            class MeteredStream extends java.io.FilterInputStream {
                protected closed: boolean
                protected expected: long
                protected count: long
                protected markedCount: long
                protected markLimit: int
                protected pi: sun.net.ProgressSource
                public constructor(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: sun.net.ProgressSource, arg2: long)
                public read(): int
                public read(arg0: byte[], arg1: int, arg2: int): int
                public skip(arg0: long): long
                public close(): void
                public available(): int
                public mark(arg0: int): void
                public reset(): void
                public markSupported(): boolean
                protected finalize(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}