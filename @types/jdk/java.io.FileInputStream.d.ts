declare namespace java {
  namespace io {

    class FileInputStream extends java.io.InputStream {
      public constructor(arg0: java.lang.String | string)
      public constructor(arg0: java.io.File)
      public constructor(arg0: java.io.FileDescriptor)
      public read(): number
      public read(arg0: byte[]): number
      public read(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
      public skip(arg0: number | java.lang.Long): number
      public available(): number
      public close(): void
      public getFD(): java.io.FileDescriptor
      public getChannel(): java.nio.channels.FileChannel
      protected finalize(): void
    }

  }
}
