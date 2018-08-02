declare namespace java {
    namespace util {
        namespace zip {
class GZIPOutputStream extends java.util.zip.DeflaterOutputStream {
    protected crc: java.util.zip.CRC32
    public constructor(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: int)
    public constructor(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: int, arg2: boolean)
    public constructor(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda)
    public constructor(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: boolean)
    public write(arg0: byte[], arg1: int, arg2: int): void
    public finish(): void
    public static class: java.lang.Class<any>
}

        }
    }
}