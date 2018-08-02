declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace messaging {
                    namespace saaj {
                        namespace util {
                            class TeeInputStream extends java.io.InputStream {
                                protected source: java.io.InputStream
                                protected copySink: java.io.OutputStream
                                public constructor(arg0: java.io.InputStream, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda)
                                public read(): int
                                public available(): int
                                public close(): void
                                public mark(arg0: int): void
                                public markSupported(): boolean
                                public read(arg0: byte[], arg1: int, arg2: int): int
                                public read(arg0: byte[]): int
                                public reset(): void
                                public skip(arg0: long): long
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}