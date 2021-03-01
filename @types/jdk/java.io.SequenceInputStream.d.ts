declare namespace java {
  namespace io {

    class SequenceInputStream extends java.io.InputStream {

      e: java.util.Enumeration<java.io.InputStream>
      in: java.io.InputStream
      public constructor(arg0: java.util.Enumeration<java.io.InputStream>)
      public constructor(arg0: java.io.InputStream, arg1: java.io.InputStream)
      readonly nextStream(): void
      public available(): int
      public read(): int
      public read(arg0: byte[], arg1: int, arg2: int): int
      public close(): void
    }

  }
}
