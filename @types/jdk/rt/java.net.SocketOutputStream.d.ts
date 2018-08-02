declare namespace java {
    namespace net {
        class SocketOutputStream extends java.io.FileOutputStream {
            public getChannel(): java.nio.channels.FileChannel
            public write(arg0: int): void
            public write(arg0: byte[]): void
            public write(arg0: byte[], arg1: int, arg2: int): void
            public close(): void
            protected finalize(): void
            public static class: java.lang.Class<any>
        }
    }
}