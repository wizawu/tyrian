declare namespace sun {
    namespace security {
        namespace ssl {
            class HandshakeInStream extends java.io.InputStream {
                public available(): int
                public read(): int
                public read(arg0: byte[], arg1: int, arg2: int): int
                public skip(arg0: long): long
                public mark(arg0: int): void
                public reset(): void
                public markSupported(): boolean
                public getBytes16(): byte[]
                public static class: java.lang.Class<any>
            }
        }
    }
}