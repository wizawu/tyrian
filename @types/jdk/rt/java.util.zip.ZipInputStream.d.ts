declare namespace java {
    namespace util {
        namespace zip {
class ZipInputStream extends java.util.zip.InflaterInputStream implements java.util.zip.ZipConstants {
    public constructor(arg0: java.io.InputStream)
    public constructor(arg0: java.io.InputStream, arg1: java.nio.charset.Charset)
    public getNextEntry(): java.util.zip.ZipEntry
    public closeEntry(): void
    public available(): int
    public read(arg0: byte[], arg1: int, arg2: int): int
    public skip(arg0: long): long
    public close(): void
    protected createZipEntry(arg0: java.lang.String | string): java.util.zip.ZipEntry
    public static class: java.lang.Class<any>
}

        }
    }
}