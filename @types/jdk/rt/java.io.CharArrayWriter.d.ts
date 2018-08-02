declare namespace java {
    namespace io {
class CharArrayWriter extends java.io.Writer {
    protected buf: char[]
    protected count: int
    public constructor()
    public constructor(arg0: int)
    public write(arg0: int): void
    public write(arg0: char[], arg1: int, arg2: int): void
    public write(arg0: java.lang.String | string, arg1: int, arg2: int): void
    public writeTo(arg0: java.io.Writer | java.io.Writer$$Lambda): void
    public append(arg0: java.lang.CharSequence): java.io.CharArrayWriter
    public append(arg0: java.lang.CharSequence, arg1: int, arg2: int): java.io.CharArrayWriter
    public append(arg0: char): java.io.CharArrayWriter
    public reset(): void
    public toCharArray(): char[]
    public size(): int
    public toString(): string
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