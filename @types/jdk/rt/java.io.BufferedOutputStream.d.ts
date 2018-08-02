declare namespace java {
    namespace io {
class BufferedOutputStream extends java.io.FilterOutputStream {
    protected buf: byte[]
    protected count: int
    public constructor(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda)
    public constructor(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: int)
    public write(arg0: int): void
    public write(arg0: byte[], arg1: int, arg2: int): void
    public flush(): void
    public static class: java.lang.Class<any>
}

    }
}