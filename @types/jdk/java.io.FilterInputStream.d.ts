declare namespace java {
  namespace io {

    class FilterInputStream extends java.io.InputStream {
      protected in: java.io.InputStream
      protected constructor(arg0: java.io.InputStream)
      public read(): number
      public read(arg0: number[] | java.lang.Byte[]): number
      public read(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
      public skip(arg0: number | java.lang.Long): number
      public available(): number
      public close(): void
      public mark(arg0: number | java.lang.Integer): void
      public reset(): void
      public markSupported(): boolean
    }

  }
}
