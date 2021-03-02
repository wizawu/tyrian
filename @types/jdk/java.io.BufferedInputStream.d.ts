declare namespace java {
  namespace io {

    class BufferedInputStream extends java.io.FilterInputStream {
      protected buf: byte[]
      protected count: int
      protected pos: int
      protected markpos: int
      protected marklimit: int
      public constructor(arg0: java.io.InputStream)
      public constructor(arg0: java.io.InputStream, arg1: number | java.lang.Integer)
      public read(): number
      public read(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
      public skip(arg0: number | java.lang.Long): number
      public available(): number
      public mark(arg0: number | java.lang.Integer): void
      public reset(): void
      public markSupported(): boolean
      public close(): void
    }

  }
}
