declare namespace java {
    namespace io {
class PipedReader extends java.io.Reader {
    public constructor(arg0: java.io.PipedWriter)
    public constructor(arg0: java.io.PipedWriter, arg1: int)
    public constructor()
    public constructor(arg0: int)
    public connect(arg0: java.io.PipedWriter): void
    public read(): int
    public read(arg0: char[], arg1: int, arg2: int): int
    public ready(): boolean
    public close(): void
    public static class: java.lang.Class<any>
}

    }
}