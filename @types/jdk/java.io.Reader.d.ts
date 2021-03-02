declare namespace java {
  namespace io {

    abstract class Reader implements java.lang.Readable, java.io.Closeable {
      protected lock: java.lang.Object
      public static nullReader(): java.io.Reader
      protected constructor()
      protected constructor(arg0: java.lang.Object)
      public read(arg0: java.nio.CharBuffer): int
      public read(): int
      public read(arg0: char[]): int
      public abstract read(arg0: char[], arg1: int, arg2: int): int
      public skip(arg0: long): long
      public ready(): boolean
      public markSupported(): boolean
      public mark(arg0: int): void
      public reset(): void
      public abstract close(): void
      public transferTo(arg0: java.io.Writer): long
    }

  }
}
