declare namespace java {
    namespace util {
        namespace zip {
class ZipFile implements java.util.zip.ZipConstants , java.io.Closeable {
    public static OPEN_READ: int
    public static OPEN_DELETE: int
    public constructor(arg0: java.lang.String | string)
    public constructor(arg0: java.io.File, arg1: int)
    public constructor(arg0: java.io.File)
    public constructor(arg0: java.io.File, arg1: int, arg2: java.nio.charset.Charset)
    public constructor(arg0: java.lang.String | string, arg1: java.nio.charset.Charset)
    public constructor(arg0: java.io.File, arg1: java.nio.charset.Charset)
    public getComment(): string
    public getEntry(arg0: java.lang.String | string): java.util.zip.ZipEntry
    public getInputStream(arg0: java.util.zip.ZipEntry): java.io.InputStream
    public getName(): string
    public entries(): java.util.Enumeration<java.util.zip.ZipEntry>
    public stream(): java.util.stream.Stream<java.util.zip.ZipEntry>
    public size(): int
    public close(): void
    protected finalize(): void
    public static class: java.lang.Class<any>
}

        }
    }
}