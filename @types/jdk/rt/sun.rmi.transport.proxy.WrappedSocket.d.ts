declare namespace sun {
    namespace rmi {
        namespace transport {
            namespace proxy {
                class WrappedSocket extends java.net.Socket {
                    protected socket: java.net.Socket
                    protected in: java.io.InputStream
                    protected out: java.io.OutputStream
                    public constructor(arg0: java.net.Socket, arg1: java.io.InputStream | java.io.InputStream$$Lambda, arg2: java.io.OutputStream | java.io.OutputStream$$Lambda)
                    public getInetAddress(): java.net.InetAddress
                    public getLocalAddress(): java.net.InetAddress
                    public getPort(): int
                    public getLocalPort(): int
                    public getInputStream(): java.io.InputStream
                    public getOutputStream(): java.io.OutputStream
                    public setTcpNoDelay(arg0: boolean): void
                    public getTcpNoDelay(): boolean
                    public setSoLinger(arg0: boolean, arg1: int): void
                    public getSoLinger(): int
                    public setSoTimeout(arg0: int): void
                    public getSoTimeout(): int
                    public close(): void
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}