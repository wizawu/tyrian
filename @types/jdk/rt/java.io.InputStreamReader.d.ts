declare namespace java {
    namespace io {
        class InputStreamReader extends java.io.Reader {
            public constructor(arg0: java.io.InputStream | java.io.InputStream$$Lambda)
            public constructor(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: java.lang.String | string)
            public constructor(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: java.nio.charset.Charset)
            public constructor(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: java.nio.charset.CharsetDecoder | java.nio.charset.CharsetDecoder$$Lambda)
            public getEncoding(): string
            public read(): int
            public read(arg0: char[], arg1: int, arg2: int): int
            public ready(): boolean
            public close(): void
            public static class: java.lang.Class<any>
        }
    }
}