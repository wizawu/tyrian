declare namespace java {
  namespace io {

    class BufferedReader extends java.io.Reader {
      public constructor(arg0: java.io.Reader, arg1: number | java.lang.Integer)
      public constructor(arg0: java.io.Reader)
      public read(): number
      public read(arg0: char[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
      readLine(arg0: boolean | java.lang.Boolean): java.lang.String
      public readLine(): java.lang.String
      public skip(arg0: number | java.lang.Long): number
      public ready(): boolean
      public markSupported(): boolean
      public mark(arg0: number | java.lang.Integer): void
      public reset(): void
      public close(): void
      public lines(): java.util.stream.Stream<java.lang.String>
    }

  }
}
