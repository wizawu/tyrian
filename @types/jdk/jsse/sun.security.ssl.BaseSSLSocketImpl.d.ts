declare namespace sun {
    namespace security {
        namespace ssl {
            abstract class BaseSSLSocketImpl extends javax.net.ssl.SSLSocket {
                public getChannel(): java.nio.channels.SocketChannel
                public bind(arg0: java.net.SocketAddress): void
                public getLocalSocketAddress(): java.net.SocketAddress
                public getRemoteSocketAddress(): java.net.SocketAddress
                public connect(arg0: java.net.SocketAddress): void
                public isConnected(): boolean
                public isBound(): boolean
                public shutdownInput(): void
                public shutdownOutput(): void
                public isInputShutdown(): boolean
                public isOutputShutdown(): boolean
                protected finalize(): void
                public getInetAddress(): java.net.InetAddress
                public getLocalAddress(): java.net.InetAddress
                public getPort(): int
                public getLocalPort(): int
                public setTcpNoDelay(arg0: boolean): void
                public getTcpNoDelay(): boolean
                public setSoLinger(arg0: boolean, arg1: int): void
                public getSoLinger(): int
                public sendUrgentData(arg0: int): void
                public setOOBInline(arg0: boolean): void
                public getOOBInline(): boolean
                public getSoTimeout(): int
                public setSendBufferSize(arg0: int): void
                public getSendBufferSize(): int
                public setReceiveBufferSize(arg0: int): void
                public getReceiveBufferSize(): int
                public setKeepAlive(arg0: boolean): void
                public getKeepAlive(): boolean
                public setTrafficClass(arg0: int): void
                public getTrafficClass(): int
                public setReuseAddress(arg0: boolean): void
                public getReuseAddress(): boolean
                public setPerformancePreferences(arg0: int, arg1: int, arg2: int): void
                public toString(): string
                public getInputStream(): java.io.InputStream
                public getOutputStream(): java.io.OutputStream
                public close(): void
                public setSoTimeout(arg0: int): void
                public static class: java.lang.Class<any>
            }
        }
    }
}