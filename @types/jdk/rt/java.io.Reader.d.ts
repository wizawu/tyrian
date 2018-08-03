declare namespace java {
    namespace io {
        abstract class Reader implements java.lang.Readable , java.io.Closeable {
            protected lock: java.lang.Object
            protected constructor()
            protected constructor(arg0: java.lang.Object)
            public read(arg0: java.nio.CharBuffer): int
            public read(): int
            public read(arg0: char[]): int
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