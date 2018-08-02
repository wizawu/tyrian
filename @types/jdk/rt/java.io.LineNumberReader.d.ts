declare namespace java {
    namespace io {
        class LineNumberReader extends java.io.BufferedReader {
            public constructor(arg0: java.io.Reader)
            public constructor(arg0: java.io.Reader, arg1: int)
            public setLineNumber(arg0: int): void
            public getLineNumber(): int
            public read(): int
            public read(arg0: char[], arg1: int, arg2: int): int
            public readLine(): string
            public skip(arg0: long): long
            public mark(arg0: int): void
            public reset(): void
            public static class: java.lang.Class<any>
        }
    }
}