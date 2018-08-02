declare namespace sun {
    namespace rmi {
        namespace log {
            class LogInputStream extends java.io.InputStream {
                public constructor(arg0: java.io.InputStream, arg1: int)
                public read(): int
                public read(arg0: byte[]): int
                public read(arg0: byte[], arg1: int, arg2: int): int
                public skip(arg0: long): long
                public available(): int
                public close(): void
                protected finalize(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}