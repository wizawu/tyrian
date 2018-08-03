declare namespace sun {
    namespace nio {
        namespace cs {
            class StreamEncoder extends java.io.Writer {
                public static forOutputStreamWriter(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: java.lang.Object, arg2: java.lang.String | string): sun.nio.cs.StreamEncoder
                public static forOutputStreamWriter(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: java.lang.Object, arg2: java.nio.charset.Charset): sun.nio.cs.StreamEncoder
                public static forOutputStreamWriter(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: java.lang.Object, arg2: java.nio.charset.CharsetEncoder | java.nio.charset.CharsetEncoder$$Lambda): sun.nio.cs.StreamEncoder
                public static forEncoder(arg0: java.nio.channels.WritableByteChannel, arg1: java.nio.charset.CharsetEncoder | java.nio.charset.CharsetEncoder$$Lambda, arg2: int): sun.nio.cs.StreamEncoder
                public getEncoding(): string
                public flushBuffer(): void
                public write(arg0: int): void
                public write(arg0: char[], arg1: int, arg2: int): void
                public write(arg0: java.lang.String | string, arg1: int, arg2: int): void
                public flush(): void
                public close(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}