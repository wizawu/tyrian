declare namespace java {
  namespace io {
    abstract class InputStream implements java.io.Closeable {
      public constructor()
      public static nullInputStream(): java.io.InputStream
      public abstract read(): number
      public read(arg0: number[] | java.lang.Byte[]): number
      public read(
        arg0: number[] | java.lang.Byte[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): number
      public readAllBytes(): number[]
      public readNBytes(arg0: number | java.lang.Integer): number[]
      public readNBytes(
        arg0: number[] | java.lang.Byte[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): number
      public skip(arg0: number | java.lang.Long): number
      public available(): number
      public close(): void
      public mark(arg0: number | java.lang.Integer): void
      public reset(): void
      public markSupported(): boolean
      public transferTo(arg0: java.io.OutputStream): number
    }
  }
}
