declare namespace sun {
    namespace net {
        namespace httpserver {
            class Request$WriteStream extends java.io.OutputStream {
                public constructor(arg0: sun.net.httpserver.ServerImpl | sun.net.httpserver.ServerImpl$$Lambda, arg1: java.nio.channels.SocketChannel)
                public write(arg0: int): void
                public write(arg0: byte[]): void
                public write(arg0: byte[], arg1: int, arg2: int): void
                public close(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}