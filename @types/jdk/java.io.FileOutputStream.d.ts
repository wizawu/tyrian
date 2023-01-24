declare namespace java {
  namespace io {
    class FileOutputStream extends java.io.OutputStream {
      public constructor(arg0: java.lang.String | string)
      public constructor(arg0: java.lang.String | string, arg1: boolean | java.lang.Boolean)
      public constructor(arg0: java.io.File)
      public constructor(arg0: java.io.File, arg1: boolean | java.lang.Boolean)
      public constructor(arg0: java.io.FileDescriptor)
      public write(arg0: number | java.lang.Integer): void
      public write(arg0: number[] | java.lang.Byte[]): void
      public write(
        arg0: number[] | java.lang.Byte[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): void
      public close(): void
      public getFD(): java.io.FileDescriptor
      public getChannel(): java.nio.channels.FileChannel
      protected finalize(): void
    }
  }
}
