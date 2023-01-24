declare namespace java {
  namespace io {
    class PipedOutputStream extends java.io.OutputStream {
      public constructor(arg0: java.io.PipedInputStream)
      public constructor()
      public connect(arg0: java.io.PipedInputStream): void
      public write(arg0: number | java.lang.Integer): void
      public write(
        arg0: number[] | java.lang.Byte[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): void
      public flush(): void
      public close(): void
    }
  }
}
