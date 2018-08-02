declare namespace java {
    namespace io {
abstract class FilterWriter extends java.io.Writer {
    protected out: java.io.Writer
    protected constructor(arg0: java.io.Writer | java.io.Writer$$Lambda)
    public write(arg0: int): void
    public write(arg0: char[], arg1: int, arg2: int): void
    public write(arg0: java.lang.String | string, arg1: int, arg2: int): void
    public flush(): void
    public close(): void
    public static class: java.lang.Class<any>
}

    }
}