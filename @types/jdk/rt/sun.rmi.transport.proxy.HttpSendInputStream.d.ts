declare namespace sun {
    namespace rmi {
        namespace transport {
            namespace proxy {
class HttpSendInputStream extends java.io.FilterInputStream {
    public constructor(arg0: java.io.InputStream, arg1: sun.rmi.transport.proxy.HttpSendSocket | sun.rmi.transport.proxy.HttpSendSocket$$Lambda)
    public deactivate(): void
    public read(): int
    public read(arg0: byte[], arg1: int, arg2: int): int
    public skip(arg0: long): long
    public available(): int
    public close(): void
    public mark(arg0: int): void
    public reset(): void
    public markSupported(): boolean
    public static class: java.lang.Class<any>
}

            }
        }
    }
}