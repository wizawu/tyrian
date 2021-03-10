declare namespace java {
  namespace io {

    abstract class FilterWriter extends java.io.Writer {
      protected out: java.io.Writer
      protected constructor(arg0: java.io.Writer)
      public write(arg0: number | java.lang.Integer): void
      public write(arg0: string[] | java.lang.Character[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public write(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public flush(): void
      public close(): void
    }

  }
}
