declare namespace java {
  namespace io {
    class SequenceInputStream extends java.io.InputStream {
      e: java.util.Enumeration<java.io.InputStream>;
      in: java.io.InputStream
      public constructor(arg0: java.util.Enumeration<java.io.InputStream>)
      public constructor(arg0: java.io.InputStream, arg1: java.io.InputStream)
      nextStream(): void
      public available(): number
      public read(): number
      public read(
        arg0: number[] | java.lang.Byte[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): number
      public close(): void
    }
  }
}
