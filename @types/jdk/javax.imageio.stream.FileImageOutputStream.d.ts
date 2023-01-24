declare namespace javax {
  namespace imageio {
    namespace stream {
      class FileImageOutputStream extends javax.imageio.stream.ImageOutputStreamImpl {
        public constructor(arg0: java.io.File)
        public constructor(arg0: java.io.RandomAccessFile)
        public read(): number
        public read(
          arg0: number[] | java.lang.Byte[],
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): number
        public write(arg0: number | java.lang.Integer): void
        public write(
          arg0: number[] | java.lang.Byte[],
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): void
        public length(): number
        public seek(arg0: number | java.lang.Long): void
        public close(): void
        protected finalize(): void
      }
    }
  }
}
