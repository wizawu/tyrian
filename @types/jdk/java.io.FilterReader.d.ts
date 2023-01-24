declare namespace java {
  namespace io {
    abstract class FilterReader extends java.io.Reader {
      protected in: java.io.Reader
      protected constructor(arg0: java.io.Reader)
      public read(): number
      public read(
        arg0: string[] | java.lang.Character[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): number
      public skip(arg0: number | java.lang.Long): number
      public ready(): boolean
      public markSupported(): boolean
      public mark(arg0: number | java.lang.Integer): void
      public reset(): void
      public close(): void
    }
  }
}
