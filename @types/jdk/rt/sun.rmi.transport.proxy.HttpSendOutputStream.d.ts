declare namespace sun {
    namespace rmi {
        namespace transport {
            namespace proxy {
                class HttpSendOutputStream extends java.io.FilterOutputStream {
                    public constructor(arg0: java.io.OutputStream, arg1: sun.rmi.transport.proxy.HttpSendSocket)
                    public deactivate(): void
                    public write(arg0: int): void
                    public write(arg0: byte[], arg1: int, arg2: int): void
                    public flush(): void
                    public close(): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}