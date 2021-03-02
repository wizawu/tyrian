declare namespace java {
  namespace io {

    class ByteArrayInputStream extends java.io.InputStream {
      protected buf: byte[]
      protected pos: int
      protected mark: int
      protected count: int
      public constructor(arg0: byte[])
      public constructor(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer)
      public read(): number
      public read(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
      public readAllBytes(): number[]
      public readNBytes(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
      public transferTo(arg0: java.io.OutputStream): number
      public skip(arg0: number | java.lang.Long): number
      public available(): number
      public markSupported(): boolean
      public mark(arg0: number | java.lang.Integer): void
      public reset(): void
      public close(): void
    }

  }
}
