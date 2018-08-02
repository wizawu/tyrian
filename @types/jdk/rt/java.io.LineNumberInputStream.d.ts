declare namespace java {
    namespace io {
        class LineNumberInputStream extends java.io.FilterInputStream {
            public constructor(arg0: java.io.InputStream)
            public read(): int
            public read(arg0: byte[], arg1: int, arg2: int): int
            public skip(arg0: long): long
            public setLineNumber(arg0: int): void
            public getLineNumber(): int
            public available(): int
            public mark(arg0: int): void
            public reset(): void
            public static class: java.lang.Class<any>
        }
    }
}