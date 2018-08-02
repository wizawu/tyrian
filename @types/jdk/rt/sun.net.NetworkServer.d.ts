declare namespace sun {
    namespace net {
class NetworkServer implements java.lang.Runnable , java.lang.Cloneable {
    public clientSocket: java.net.Socket
    public clientOutput: java.io.PrintStream
    public clientInput: java.io.InputStream
    public close(): void
    public clientIsOpen(): boolean
    public run(): void
    public startServer(arg0: int): void
    public serviceRequest(): void
    public static main(arg0: java.lang.String[]): void
    public clone(): java.lang.Object
    public constructor()
    public static class: java.lang.Class<any>
}

    }
}