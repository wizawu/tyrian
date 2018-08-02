declare namespace java {
    namespace net {
        abstract class AbstractPlainSocketImpl extends java.net.SocketImpl {
            protected fdUseCount: int
            protected fdLock: java.lang.Object
            protected closePending: boolean
            protected stream: boolean
            public static SHUT_RD: int
            public static SHUT_WR: int
            protected create(arg0: boolean): void
            protected connect(arg0: java.lang.String | string, arg1: int): void
            protected connect(arg0: java.net.InetAddress, arg1: int): void
            protected connect(arg0: java.net.SocketAddress, arg1: int): void
            public setOption(arg0: int, arg1: java.lang.Object): void
            public getOption(arg0: int): java.lang.Object
            protected bind(arg0: java.net.InetAddress, arg1: int): void
            protected listen(arg0: int): void
            protected accept(arg0: java.net.SocketImpl): void
            protected getInputStream(): java.io.InputStream
            protected getOutputStream(): java.io.OutputStream
            protected available(): int
            protected close(): void
            protected shutdownInput(): void
            protected shutdownOutput(): void
            protected supportsUrgentData(): boolean
            protected sendUrgentData(arg0: int): void
            protected finalize(): void
            public isConnectionReset(): boolean
            public isConnectionResetPending(): boolean
            public setConnectionReset(): void
            public setConnectionResetPending(): void
            public isClosedOrPending(): boolean
            public getTimeout(): int
            protected socketClose(): void
            public static class: java.lang.Class<any>
        }
    }
}