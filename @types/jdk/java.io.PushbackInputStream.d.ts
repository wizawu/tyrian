declare namespace java {
  namespace io {

    class PushbackInputStream extends java.io.FilterInputStream {
      protected buf: byte[]
      protected pos: int
      public constructor(arg0: java.io.InputStream, arg1: number | java.lang.Integer)
      public constructor(arg0: java.io.InputStream)
      public read(): number
      public read(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
      public unread(arg0: number | java.lang.Integer): void
      public unread(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public unread(arg0: byte[]): void
      public available(): number
      public skip(arg0: number | java.lang.Long): number
      public markSupported(): boolean
      public mark(arg0: number | java.lang.Integer): void
      public reset(): void
      public close(): void
    }

  }
}
