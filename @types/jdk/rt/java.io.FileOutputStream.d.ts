declare namespace java {
    namespace io {
class FileOutputStream extends java.io.OutputStream {
    public constructor(arg0: java.lang.String | string)
    public constructor(arg0: java.lang.String | string, arg1: boolean)
    public constructor(arg0: java.io.File)
    public constructor(arg0: java.io.File, arg1: boolean)
    public constructor(arg0: java.io.FileDescriptor)
    public write(arg0: int): void
    public write(arg0: byte[]): void
    public write(arg0: byte[], arg1: int, arg2: int): void
    public close(): void
    public getFD(): java.io.FileDescriptor
    public getChannel(): java.nio.channels.FileChannel
    protected finalize(): void
    public static class: java.lang.Class<any>
}

    }
}