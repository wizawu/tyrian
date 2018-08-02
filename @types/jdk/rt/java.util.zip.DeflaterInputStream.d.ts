declare namespace java {
    namespace util {
        namespace zip {
            class DeflaterInputStream extends java.io.FilterInputStream {
                protected def: java.util.zip.Deflater
                protected buf: byte[]
                public constructor(arg0: java.io.InputStream)
                public constructor(arg0: java.io.InputStream, arg1: java.util.zip.Deflater)
                public constructor(arg0: java.io.InputStream, arg1: java.util.zip.Deflater, arg2: int)
                public close(): void
                public read(): int
                public read(arg0: byte[], arg1: int, arg2: int): int
                public skip(arg0: long): long
                public available(): int
                public markSupported(): boolean
                public mark(arg0: int): void
                public reset(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}