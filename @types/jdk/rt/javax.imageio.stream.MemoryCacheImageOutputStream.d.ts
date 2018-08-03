declare namespace javax {
    namespace imageio {
        namespace stream {
            class MemoryCacheImageOutputStream extends javax.imageio.stream.ImageOutputStreamImpl {
                public constructor(arg0: java.io.OutputStream)
                public read(): int
                public read(arg0: byte[], arg1: int, arg2: int): int
                public write(arg0: int): void
                public write(arg0: byte[], arg1: int, arg2: int): void
                public length(): long
                public isCached(): boolean
                public isCachedFile(): boolean
                public isCachedMemory(): boolean
                public close(): void
                public flushBefore(arg0: long): void
                public static class: java.lang.Class<any>
            }
        }
    }
}