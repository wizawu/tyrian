declare namespace javax {
    namespace imageio {
        namespace stream {
            class FileImageOutputStream extends javax.imageio.stream.ImageOutputStreamImpl {
                public constructor(arg0: java.io.File)
                public constructor(arg0: java.io.RandomAccessFile)
                public read(): int
                public read(arg0: byte[], arg1: int, arg2: int): int
                public write(arg0: int): void
                public write(arg0: byte[], arg1: int, arg2: int): void
                public length(): long
                public seek(arg0: long): void
                public close(): void
                protected finalize(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}