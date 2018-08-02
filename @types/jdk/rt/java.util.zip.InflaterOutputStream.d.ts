declare namespace java {
    namespace util {
        namespace zip {
class InflaterOutputStream extends java.io.FilterOutputStream {
    protected inf: java.util.zip.Inflater
    protected buf: byte[]
    public constructor(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda)
    public constructor(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: java.util.zip.Inflater)
    public constructor(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: java.util.zip.Inflater, arg2: int)
    public close(): void
    public flush(): void
    public finish(): void
    public write(arg0: int): void
    public write(arg0: byte[], arg1: int, arg2: int): void
    public static class: java.lang.Class<any>
}

        }
    }
}