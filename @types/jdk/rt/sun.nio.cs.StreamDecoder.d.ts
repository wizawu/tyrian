declare namespace sun {
    namespace nio {
        namespace cs {
            class StreamDecoder extends java.io.Reader {
                public static forInputStreamReader(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: java.lang.Object, arg2: java.lang.String | string): sun.nio.cs.StreamDecoder
                public static forInputStreamReader(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: java.lang.Object, arg2: java.nio.charset.Charset): sun.nio.cs.StreamDecoder
                public static forInputStreamReader(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: java.lang.Object, arg2: java.nio.charset.CharsetDecoder | java.nio.charset.CharsetDecoder$$Lambda): sun.nio.cs.StreamDecoder
                public static forDecoder(arg0: java.nio.channels.ReadableByteChannel, arg1: java.nio.charset.CharsetDecoder | java.nio.charset.CharsetDecoder$$Lambda, arg2: int): sun.nio.cs.StreamDecoder
                public getEncoding(): string
                public read(): int
                public read(arg0: char[], arg1: int, arg2: int): int
                public ready(): boolean
                public close(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}