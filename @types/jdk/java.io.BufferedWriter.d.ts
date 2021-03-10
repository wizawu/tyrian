declare namespace java {
  namespace io {

    class BufferedWriter extends java.io.Writer {
      public constructor(arg0: java.io.Writer)
      public constructor(arg0: java.io.Writer, arg1: number | java.lang.Integer)
      flushBuffer(): void
      public write(arg0: number | java.lang.Integer): void
      public write(arg0: string[] | java.lang.Character[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public write(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public newLine(): void
      public flush(): void
      public close(): void
    }

  }
}
