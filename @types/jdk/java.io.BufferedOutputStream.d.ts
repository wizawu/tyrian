declare namespace java {
  namespace io {

    class BufferedOutputStream extends java.io.FilterOutputStream {
      protected buf: byte[]
      protected count: int
      public constructor(arg0: java.io.OutputStream)
      public constructor(arg0: java.io.OutputStream, arg1: number | java.lang.Integer)
      public write(arg0: number | java.lang.Integer): void
      public write(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public flush(): void
    }

  }
}
