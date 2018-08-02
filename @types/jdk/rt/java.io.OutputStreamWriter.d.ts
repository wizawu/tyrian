declare namespace java {
    namespace io {
class OutputStreamWriter extends java.io.Writer {
    public constructor(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: java.lang.String | string)
    public constructor(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda)
    public constructor(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: java.nio.charset.Charset)
    public constructor(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: java.nio.charset.CharsetEncoder)
    public getEncoding(): string
    public write(arg0: int): void
    public write(arg0: char[], arg1: int, arg2: int): void
    public write(arg0: java.lang.String | string, arg1: int, arg2: int): void
    public flush(): void
    public close(): void
    public static class: java.lang.Class<any>
}

    }
}