declare namespace java {
  namespace io {

    class PipedWriter extends java.io.Writer {
      public constructor(arg0: java.io.PipedReader)
      public constructor()
      public connect(arg0: java.io.PipedReader): void
      public write(arg0: int): void
      public write(arg0: char[], arg1: int, arg2: int): void
      public flush(): void
      public close(): void
    }

  }
}
