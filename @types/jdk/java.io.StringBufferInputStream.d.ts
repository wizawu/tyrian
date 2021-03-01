declare namespace java {
  namespace io {

    class StringBufferInputStream extends java.io.InputStream {

      protected buffer: java.lang.String
      protected pos: int
      protected count: int
      public constructor(arg0: java.lang.String)
      public read(): int
      public read(arg0: byte[], arg1: int, arg2: int): int
      public skip(arg0: long): long
      public available(): int
      public reset(): void
    }

  }
}
