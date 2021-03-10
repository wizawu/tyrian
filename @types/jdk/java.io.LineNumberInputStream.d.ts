declare namespace java {
  namespace io {

    class LineNumberInputStream extends java.io.FilterInputStream {
      pushBack: int
      lineNumber: int
      markLineNumber: int
      markPushBack: int
      public constructor(arg0: java.io.InputStream)
      public read(): number
      public read(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
      public skip(arg0: number | java.lang.Long): number
      public setLineNumber(arg0: number | java.lang.Integer): void
      public getLineNumber(): number
      public available(): number
      public mark(arg0: number | java.lang.Integer): void
      public reset(): void
    }

  }
}
