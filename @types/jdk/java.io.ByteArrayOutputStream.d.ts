declare namespace java {
  namespace io {

    class ByteArrayOutputStream extends java.io.OutputStream {
      protected buf: byte[]
      protected count: int
      public constructor()
      public constructor(arg0: number | java.lang.Integer)
      public write(arg0: number | java.lang.Integer): void
      public write(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public writeBytes(arg0: number[] | java.lang.Byte[]): void
      public writeTo(arg0: java.io.OutputStream): void
      public reset(): void
      public toByteArray(): number[]
      public size(): number
      public toString(): java.lang.String
      public toString(arg0: java.lang.String | string): java.lang.String
      public toString(arg0: java.nio.charset.Charset): java.lang.String
      public toString(arg0: number | java.lang.Integer): java.lang.String
      public close(): void
    }

  }
}
