declare namespace java {
  namespace io {

    class FileInputStream extends java.io.InputStream {

      public constructor(arg0: java.lang.String)
      public constructor(arg0: java.io.File)
      public constructor(arg0: java.io.FileDescriptor)
      public read(): int
      public read(arg0: byte[]): int
      public read(arg0: byte[], arg1: int, arg2: int): int
      public skip(arg0: long): long
      public available(): int
      public close(): void
      public readonly getFD(): java.io.FileDescriptor
      public getChannel(): java.nio.channels.FileChannel
      protected finalize(): void
    }

  }
}
