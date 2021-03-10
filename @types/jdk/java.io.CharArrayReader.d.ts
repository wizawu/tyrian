declare namespace java {
  namespace io {

    class CharArrayReader extends java.io.Reader {
      protected buf: char[]
      protected pos: int
      protected markedPos: int
      protected count: int
      public constructor(arg0: string[] | java.lang.Character[])
      public constructor(arg0: string[] | java.lang.Character[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer)
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
