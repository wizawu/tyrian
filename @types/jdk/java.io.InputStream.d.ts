declare namespace java {
  namespace io {

    abstract class InputStream implements java.io.Closeable {

      public constructor()
      public static nullInputStream(): java.io.InputStream
      public abstract read(): int
      public read(arg0: byte[]): int
      public read(arg0: byte[], arg1: int, arg2: int): int
      public readAllBytes(): byte[]
      public readNBytes(arg0: int): byte[]
      public readNBytes(arg0: byte[], arg1: int, arg2: int): int
      public skip(arg0: long): long
      public available(): int
      public close(): void
      public mark(arg0: int): void
      public reset(): void
      public markSupported(): boolean
      public transferTo(arg0: java.io.OutputStream): long
    }

  }
}
