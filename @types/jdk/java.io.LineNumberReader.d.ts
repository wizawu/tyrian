declare namespace java {
  namespace io {
    class LineNumberReader extends java.io.BufferedReader {
      public constructor(arg0: java.io.Reader)
      public constructor(arg0: java.io.Reader, arg1: number | java.lang.Integer)
      public setLineNumber(arg0: number | java.lang.Integer): void
      public getLineNumber(): number
      public read(): number
      public read(
        arg0: string[] | java.lang.Character[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): number
      public readLine(): java.lang.String
      public skip(arg0: number | java.lang.Long): number
      public mark(arg0: number | java.lang.Integer): void
      public reset(): void
    }
  }
}
