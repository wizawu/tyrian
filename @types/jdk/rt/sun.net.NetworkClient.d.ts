declare namespace sun {
    namespace net {
class NetworkClient {
    public static DEFAULT_READ_TIMEOUT: int
    public static DEFAULT_CONNECT_TIMEOUT: int
    protected proxy: java.net.Proxy
    protected serverSocket: java.net.Socket
    public serverOutput: java.io.PrintStream
    public serverInput: java.io.InputStream
    protected static defaultSoTimeout: int
    protected static defaultConnectTimeout: int
    protected readTimeout: int
    protected connectTimeout: int
    protected static encoding: string
    public openServer(arg0: java.lang.String | string, arg1: int): void
    protected doConnect(arg0: java.lang.String | string, arg1: int): java.net.Socket
    protected createSocket(): java.net.Socket
    protected getLocalAddress(): java.net.InetAddress
    public closeServer(): void
    public serverIsOpen(): boolean
    public constructor(arg0: java.lang.String | string, arg1: int)
    public constructor()
    public setConnectTimeout(arg0: int): void
    public getConnectTimeout(): int
    public setReadTimeout(arg0: int): void
    public getReadTimeout(): int
    public static class: java.lang.Class<any>
}

    }
}