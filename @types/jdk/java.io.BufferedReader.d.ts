declare namespace java {
  namespace io {

    class BufferedReader extends java.io.Reader {
      public constructor(arg0: java.io.Reader, arg1: int)
      public constructor(arg0: java.io.Reader)
      public read(): int
      public read(arg0: char[], arg1: int, arg2: int): int
      readLine(arg0: boolean): java.lang.String
      public readLine(): java.lang.String
      public skip(arg0: long): long
      public ready(): boolean
      public markSupported(): boolean
      public mark(arg0: int): void
      public reset(): void
      public close(): void
      public lines(): java.util.stream.Stream<java.lang.String>
    }

  }
}
