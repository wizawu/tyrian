declare namespace javax {
  namespace imageio {
    namespace stream {

      class FileImageInputStream extends javax.imageio.stream.ImageInputStreamImpl {
        public constructor(arg0: java.io.File)
        public constructor(arg0: java.io.RandomAccessFile)
        public read(): number
        public read(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
        public length(): number
        public seek(arg0: number | java.lang.Long): void
        public close(): void
        protected finalize(): void
      }

    }
  }
}
