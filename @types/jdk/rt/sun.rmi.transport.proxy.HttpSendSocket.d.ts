declare namespace sun {
    namespace rmi {
        namespace transport {
            namespace proxy {
                class HttpSendSocket extends java.net.Socket implements sun.rmi.transport.proxy.RMISocketInfo {
                    protected host: string
                    protected port: int
                    protected url: java.net.URL
                    protected conn: java.net.URLConnection
                    protected in: java.io.InputStream
                    protected out: java.io.OutputStream
                    protected inNotifier: sun.rmi.transport.proxy.HttpSendInputStream
                    protected outNotifier: sun.rmi.transport.proxy.HttpSendOutputStream
                    public constructor(arg0: java.lang.String | string, arg1: int, arg2: java.net.URL)
                    public constructor(arg0: java.lang.String | string, arg1: int)
                    public constructor(arg0: java.net.InetAddress, arg1: int)
                    public isReusable(): boolean
                    public writeNotify(): java.io.OutputStream
                    public readNotify(): java.io.InputStream
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
                class HttpSendSocket$$Lambda extends java.net.Socket implements sun.rmi.transport.proxy.RMISocketInfo {
                    protected host: string
                }
            }
        }
    }
}