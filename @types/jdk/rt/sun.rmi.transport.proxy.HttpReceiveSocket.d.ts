declare namespace sun {
    namespace rmi {
        namespace transport {
            namespace proxy {
                class HttpReceiveSocket extends sun.rmi.transport.proxy.WrappedSocket implements sun.rmi.transport.proxy.RMISocketInfo {
                    public constructor(arg0: java.net.Socket, arg1: java.io.InputStream, arg2: java.io.OutputStream | java.io.OutputStream$$Lambda)
                    public isReusable(): boolean
                    public getInetAddress(): java.net.InetAddress
                    public getOutputStream(): java.io.OutputStream
                    public close(): void
                    public toString(): string
                    public getSoTimeout(): int
                    public setSoTimeout(arg0: int): void
                    public getSoLinger(): int
                    public setSoLinger(arg0: boolean, arg1: int): void
                    public getTcpNoDelay(): boolean
                    public setTcpNoDelay(arg0: boolean): void
                    public getInputStream(): java.io.InputStream
                    public getLocalPort(): int
                    public getPort(): int
                    public getLocalAddress(): java.net.InetAddress
                    public static class: java.lang.Class<any>
                }
                class HttpReceiveSocket$$Lambda extends sun.rmi.transport.proxy.WrappedSocket implements sun.rmi.transport.proxy.RMISocketInfo {
                    public constructor(arg0: java.net.Socket, arg1: java.io.InputStream, arg2: java.io.OutputStream | java.io.OutputStream$$Lambda)
                }
            }
        }
    }
}