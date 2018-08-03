declare namespace sun {
    namespace net {
        namespace httpserver {
            class Request$ReadStream extends java.io.InputStream {
                public constructor(arg0: sun.net.httpserver.ServerImpl, arg1: java.nio.channels.SocketChannel)
                public read(arg0: byte[]): int
                public read(): int
                public read(arg0: byte[], arg1: int, arg2: int): int
                public markSupported(): boolean
                public available(): int
                public close(): void
                public mark(arg0: int): void
                public reset(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}