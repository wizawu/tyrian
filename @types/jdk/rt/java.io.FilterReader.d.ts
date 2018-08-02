declare namespace java {
    namespace io {
        abstract class FilterReader extends java.io.Reader {
            protected in: java.io.Reader
            protected constructor(arg0: java.io.Reader)
            public read(): int
            public read(arg0: char[], arg1: int, arg2: int): int
            public skip(arg0: long): long
            public ready(): boolean
            public markSupported(): boolean
            public mark(arg0: int): void
            public reset(): void
            public close(): void
            public static class: java.lang.Class<any>
        }
    }
}