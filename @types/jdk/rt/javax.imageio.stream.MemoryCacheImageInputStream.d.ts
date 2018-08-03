declare namespace javax {
    namespace imageio {
        namespace stream {
            class MemoryCacheImageInputStream extends javax.imageio.stream.ImageInputStreamImpl {
                public constructor(arg0: java.io.InputStream | java.io.InputStream$$Lambda)
                public read(): int
                public read(arg0: byte[], arg1: int, arg2: int): int
                public flushBefore(arg0: long): void
                public isCached(): boolean
                public isCachedFile(): boolean
                public isCachedMemory(): boolean
                public close(): void
                protected finalize(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}