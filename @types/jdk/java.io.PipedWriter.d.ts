declare namespace java {
  namespace io {
    class PipedWriter extends java.io.Writer {
      public constructor(arg0: java.io.PipedReader)
      public constructor()
      public connect(arg0: java.io.PipedReader): void
      public write(arg0: number | java.lang.Integer): void
      public write(
        arg0: string[] | java.lang.Character[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): void
      public flush(): void
      public close(): void
    }
  }
}
