declare namespace java {
  namespace io {
    abstract class Reader implements java.lang.Readable, java.io.Closeable {
      protected lock: java.lang.Object
      public static nullReader(): java.io.Reader
      protected constructor()
      protected constructor(arg0: java.lang.Object | any)
      public read(arg0: java.nio.CharBuffer): number
      public read(): number
      public read(arg0: string[] | java.lang.Character[]): number
      public abstract read(
        arg0: string[] | java.lang.Character[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): number
      public skip(arg0: number | java.lang.Long): number
      public ready(): boolean
      public markSupported(): boolean
      public mark(arg0: number | java.lang.Integer): void
      public reset(): void
      public abstract close(): void
      public transferTo(arg0: java.io.Writer): number
    }
  }
}
