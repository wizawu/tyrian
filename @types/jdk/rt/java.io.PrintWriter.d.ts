declare namespace java {
    namespace io {
class PrintWriter extends java.io.Writer {
    protected out: java.io.Writer
    public constructor(arg0: java.io.Writer | java.io.Writer$$Lambda)
    public constructor(arg0: java.io.Writer | java.io.Writer$$Lambda, arg1: boolean)
    public constructor(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda)
    public constructor(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: boolean)
    public constructor(arg0: java.lang.String | string)
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
    public constructor(arg0: java.io.File)
    public constructor(arg0: java.io.File, arg1: java.lang.String | string)
    public flush(): void
    public close(): void
    public checkError(): boolean
    protected setError(): void
    protected clearError(): void
    public write(arg0: int): void
    public write(arg0: char[], arg1: int, arg2: int): void
    public write(arg0: char[]): void
    public write(arg0: java.lang.String | string, arg1: int, arg2: int): void
    public write(arg0: java.lang.String | string): void
    public print(arg0: boolean): void
    public print(arg0: char): void
    public print(arg0: int): void
    public print(arg0: long): void
    public print(arg0: float): void
    public print(arg0: double): void
    public print(arg0: char[]): void
    public print(arg0: java.lang.String | string): void
    public print(arg0: java.lang.Object): void
    public println(): void
    public println(arg0: boolean): void
    public println(arg0: char): void
    public println(arg0: int): void
    public println(arg0: long): void
    public println(arg0: float): void
    public println(arg0: double): void
    public println(arg0: char[]): void
    public println(arg0: java.lang.String | string): void
    public println(arg0: java.lang.Object): void
    public printf(arg0: java.lang.String | string, ...arg1: java.lang.Object[]): java.io.PrintWriter
    public printf(arg0: java.util.Locale, arg1: java.lang.String | string, ...arg2: java.lang.Object[]): java.io.PrintWriter
    public format(arg0: java.lang.String | string, ...arg1: java.lang.Object[]): java.io.PrintWriter
    public format(arg0: java.util.Locale, arg1: java.lang.String | string, ...arg2: java.lang.Object[]): java.io.PrintWriter
    public append(arg0: java.lang.CharSequence): java.io.PrintWriter
    public append(arg0: java.lang.CharSequence, arg1: int, arg2: int): java.io.PrintWriter
    public append(arg0: char): java.io.PrintWriter
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