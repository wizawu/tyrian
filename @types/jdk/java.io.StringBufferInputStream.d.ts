declare namespace java {
  namespace io {

    class StringBufferInputStream extends java.io.InputStream {
      protected buffer: java.lang.String
      protected pos: int
      protected count: int
      public constructor(arg0: java.lang.String | string)
      public read(): number
      public read(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
      public skip(arg0: number | java.lang.Long): number
      public available(): number
      public reset(): void
    }

  }
}
