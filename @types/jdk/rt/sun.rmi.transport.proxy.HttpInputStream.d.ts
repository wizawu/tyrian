declare namespace sun {
    namespace rmi {
        namespace transport {
            namespace proxy {
class HttpInputStream extends java.io.FilterInputStream {
    protected bytesLeft: int
    protected bytesLeftAtMark: int
    public constructor(arg0: java.io.InputStream)
    public available(): int
    public read(): int
    public read(arg0: byte[], arg1: int, arg2: int): int
    public mark(arg0: int): void
    public reset(): void
    public skip(arg0: long): long
    public static class: java.lang.Class<any>
}

            }
        }
    }
}