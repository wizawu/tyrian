declare namespace java {
    namespace net {
        abstract class SocketImpl implements java.net.SocketOptions {
            protected fd: java.io.FileDescriptor
            protected address: java.net.InetAddress
            protected port: int
            protected localport: int
            public constructor()
            protected abstract create(arg0: boolean): void
            protected abstract connect(arg0: java.lang.String | string, arg1: int): void
            protected abstract connect(arg0: java.net.InetAddress, arg1: int): void
            protected abstract connect(arg0: java.net.SocketAddress, arg1: int): void
            protected abstract bind(arg0: java.net.InetAddress, arg1: int): void
            protected abstract listen(arg0: int): void
            protected abstract accept(arg0: java.net.SocketImpl): void
            protected abstract getInputStream(): java.io.InputStream
            protected abstract getOutputStream(): java.io.OutputStream
            protected abstract available(): int
            protected abstract close(): void
            protected shutdownInput(): void
            protected shutdownOutput(): void
            protected getFileDescriptor(): java.io.FileDescriptor
            protected getInetAddress(): java.net.InetAddress
            protected getPort(): int
            protected supportsUrgentData(): boolean
            protected abstract sendUrgentData(arg0: int): void
            protected getLocalPort(): int
            public toString(): string
            protected setPerformancePreferences(arg0: int, arg1: int, arg2: int): void
            public static class: java.lang.Class<any>
        }
    }
}