declare namespace javax {
  namespace imageio {
    namespace stream {

      class MemoryCacheImageInputStream extends javax.imageio.stream.ImageInputStreamImpl {
        public constructor(arg0: java.io.InputStream)
        public read(): number
        public read(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
        public flushBefore(arg0: number | java.lang.Long): void
        public isCached(): boolean
        public isCachedFile(): boolean
        public isCachedMemory(): boolean
        public close(): void
        protected finalize(): void
      }

    }
  }
}
