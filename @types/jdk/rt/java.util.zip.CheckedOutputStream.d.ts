declare namespace java {
    namespace util {
        namespace zip {
class CheckedOutputStream extends java.io.FilterOutputStream {
    public constructor(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: java.util.zip.Checksum)
    public write(arg0: int): void
    public write(arg0: byte[], arg1: int, arg2: int): void
    public getChecksum(): java.util.zip.Checksum
    public static class: java.lang.Class<any>
}

        }
    }
}