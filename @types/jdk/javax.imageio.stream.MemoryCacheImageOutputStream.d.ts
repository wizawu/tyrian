declare namespace javax {
  namespace imageio {
    namespace stream {

      class MemoryCacheImageOutputStream extends javax.imageio.stream.ImageOutputStreamImpl {
        public constructor(arg0: java.io.OutputStream)
        public read(): number
        public read(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
        public write(arg0: number | java.lang.Integer): void
        public write(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
        public length(): number
        public isCached(): boolean
        public isCachedFile(): boolean
        public isCachedMemory(): boolean
        public close(): void
        public flushBefore(arg0: number | java.lang.Long): void
      }

    }
  }
}
