declare namespace sun {
    namespace net {
        namespace smtp {
class SmtpClient extends sun.net.TransferProtocolClient {
    public closeServer(): void
    public to(arg0: java.lang.String | string): void
    public from(arg0: java.lang.String | string): void
    public startMessage(): java.io.PrintStream
    public constructor(arg0: java.lang.String | string)
    public constructor()
    public constructor(arg0: int)
    public getMailHost(): string
    public static class: java.lang.Class<any>
}

        }
    }
}