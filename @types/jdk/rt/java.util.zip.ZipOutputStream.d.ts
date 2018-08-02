declare namespace java {
    namespace util {
        namespace zip {
class ZipOutputStream extends java.util.zip.DeflaterOutputStream implements java.util.zip.ZipConstants {
    public static STORED: int
    public static DEFLATED: int
    public constructor(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda)
    public constructor(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: java.nio.charset.Charset)
    public setComment(arg0: java.lang.String | string): void
    public setMethod(arg0: int): void
    public setLevel(arg0: int): void
    public putNextEntry(arg0: java.util.zip.ZipEntry): void
    public closeEntry(): void
    public write(arg0: byte[], arg1: int, arg2: int): void
    public finish(): void
    public close(): void
    public static class: java.lang.Class<any>
}

        }
    }
}