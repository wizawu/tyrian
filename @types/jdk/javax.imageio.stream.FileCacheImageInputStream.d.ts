declare namespace javax {
  namespace imageio {
    namespace stream {

      class FileCacheImageInputStream extends javax.imageio.stream.ImageInputStreamImpl {
        public constructor(arg0: java.io.InputStream, arg1: java.io.File)
        public read(): number
        public read(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
        public isCached(): boolean
        public isCachedFile(): boolean
        public isCachedMemory(): boolean
        public close(): void
        protected finalize(): void
      }

    }
  }
}
