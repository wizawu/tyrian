declare namespace java {
    namespace io {
        class PushbackReader extends java.io.FilterReader {
            public constructor(arg0: java.io.Reader, arg1: int)
            public constructor(arg0: java.io.Reader)
            public read(): int
            public read(arg0: char[], arg1: int, arg2: int): int
            public unread(arg0: int): void
            public unread(arg0: char[], arg1: int, arg2: int): void
            public unread(arg0: char[]): void
            public ready(): boolean
            public mark(arg0: int): void
            public reset(): void
            public markSupported(): boolean
            public close(): void
            public skip(arg0: long): long
            public static class: java.lang.Class<any>
        }
    }
}