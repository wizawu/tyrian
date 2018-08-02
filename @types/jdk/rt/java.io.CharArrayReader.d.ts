declare namespace java {
    namespace io {
class CharArrayReader extends java.io.Reader {
    protected buf: char[]
    protected pos: int
    protected markedPos: int
    protected count: int
    public constructor(arg0: char[])
    public constructor(arg0: char[], arg1: int, arg2: int)
    public read(): int
    public read(arg0: char[], arg1: int, arg2: int): int
    public skip(arg0: long): long
    public ready(): boolean
    public markSupported(): boolean
    public mark(arg0: int): void
    public reset(): void
    public close(): void
    public static class: java.lang.Class<any>
}

    }
}