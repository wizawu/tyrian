declare namespace java {
  namespace io {

    class PipedOutputStream extends java.io.OutputStream {

      public constructor(arg0: java.io.PipedInputStream)
      public constructor()
      public connect(arg0: java.io.PipedInputStream): void
      public write(arg0: int): void
      public write(arg0: byte[], arg1: int, arg2: int): void
      public flush(): void
      public close(): void
    }

  }
}
