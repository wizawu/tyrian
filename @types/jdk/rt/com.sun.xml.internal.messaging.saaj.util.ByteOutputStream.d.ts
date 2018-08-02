declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace messaging {
                    namespace saaj {
                        namespace util {
                            class ByteOutputStream extends java.io.OutputStream {
                                protected buf: byte[]
                                protected count: int
                                public constructor()
                                public constructor(arg0: int)
                                public write(arg0: java.io.InputStream): void
                                public write(arg0: int): void
                                public write(arg0: byte[], arg1: int, arg2: int): void
                                public write(arg0: byte[]): void
                                public writeAsAscii(arg0: java.lang.String | string): void
                                public writeTo(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                                public reset(): void
                                public toByteArray(): byte[]
                                public size(): int
                                public newInputStream(): com.sun.xml.internal.messaging.saaj.util.ByteInputStream
                                public toString(): string
                                public close(): void
                                public getBytes(): byte[]
                                public getCount(): int
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}