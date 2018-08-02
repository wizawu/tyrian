declare namespace java {
    namespace io {
class StringWriter extends java.io.Writer {
    public constructor()
    public constructor(arg0: int)
    public write(arg0: int): void
    public write(arg0: char[], arg1: int, arg2: int): void
    public write(arg0: java.lang.String | string): void
    public write(arg0: java.lang.String | string, arg1: int, arg2: int): void
    public append(arg0: java.lang.CharSequence): java.io.StringWriter
    public append(arg0: java.lang.CharSequence, arg1: int, arg2: int): java.io.StringWriter
    public append(arg0: char): java.io.StringWriter
    public toString(): string
    public getBuffer(): java.lang.StringBuffer
    public flush(): void
    public close(): void
    public append(arg0: char): java.io.Writer
    public append(arg0: java.lang.CharSequence, arg1: int, arg2: int): java.io.Writer
    public append(arg0: java.lang.CharSequence): java.io.Writer
    public append(arg0: char): java.lang.Appendable
    public append(arg0: java.lang.CharSequence, arg1: int, arg2: int): java.lang.Appendable
    public append(arg0: java.lang.CharSequence): java.lang.Appendable
    public static class: java.lang.Class<any>
}

    }
}