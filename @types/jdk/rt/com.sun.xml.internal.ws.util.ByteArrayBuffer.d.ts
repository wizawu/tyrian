declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace util {
                        class ByteArrayBuffer extends java.io.OutputStream {
                            protected buf: byte[]
                            public constructor()
                            public constructor(arg0: int)
                            public constructor(arg0: byte[])
                            public constructor(arg0: byte[], arg1: int)
                            public write(arg0: java.io.InputStream): void
                            public write(arg0: int): void
                            public write(arg0: byte[], arg1: int, arg2: int): void
                            public writeTo(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                            public reset(): void
                            public toByteArray(): byte[]
                            public size(): int
                            public getRawData(): byte[]
                            public close(): void
                            public newInputStream(): java.io.InputStream
                            public newInputStream(arg0: int, arg1: int): java.io.InputStream
                            public toString(): string
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}