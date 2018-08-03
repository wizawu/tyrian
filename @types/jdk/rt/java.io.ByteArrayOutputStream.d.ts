declare namespace java {
    namespace io {
        class ByteArrayOutputStream extends java.io.OutputStream {
            protected buf: byte[]
            protected count: int
            public constructor()
            public constructor(arg0: int)
            public write(arg0: int): void
            public write(arg0: byte[], arg1: int, arg2: int): void
            public writeTo(arg0: java.io.OutputStream): void
            public reset(): void
            public toByteArray(): byte[]
            public size(): int
            public toString(): string
            public toString(arg0: java.lang.String | string): string
            public toString(arg0: int): string
            public close(): void
            public static class: java.lang.Class<any>
        }
    }
}