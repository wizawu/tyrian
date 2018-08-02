declare namespace java {
    namespace net {
        class SocketInputStream extends java.io.FileInputStream {
            public getChannel(): java.nio.channels.FileChannel
            public read(arg0: byte[]): int
            public read(arg0: byte[], arg1: int, arg2: int): int
            public read(): int
            public skip(arg0: long): long
            public available(): int
            public close(): void
            protected finalize(): void
            public static class: java.lang.Class<any>
        }
    }
}