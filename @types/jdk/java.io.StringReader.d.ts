declare namespace java {
  namespace io {

    class StringReader extends java.io.Reader {
      public constructor(arg0: java.lang.String | string)
      public read(): number
      public read(arg0: string[] | java.lang.Character[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
      public skip(arg0: number | java.lang.Long): number
      public ready(): boolean
      public markSupported(): boolean
      public mark(arg0: number | java.lang.Integer): void
      public reset(): void
      public close(): void
    }

  }
}
