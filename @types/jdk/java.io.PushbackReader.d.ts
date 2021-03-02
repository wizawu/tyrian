declare namespace java {
  namespace io {

    class PushbackReader extends java.io.FilterReader {
      public constructor(arg0: java.io.Reader, arg1: number | java.lang.Integer)
      public constructor(arg0: java.io.Reader)
      public read(): number
      public read(arg0: char[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
      public unread(arg0: number | java.lang.Integer): void
      public unread(arg0: char[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public unread(arg0: char[]): void
      public ready(): boolean
      public mark(arg0: number | java.lang.Integer): void
      public reset(): void
      public markSupported(): boolean
      public close(): void
      public skip(arg0: number | java.lang.Long): number
    }

  }
}
