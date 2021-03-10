declare namespace java {
  namespace io {

    abstract class OutputStream implements java.io.Closeable, java.io.Flushable {
      public constructor()
      public static nullOutputStream(): java.io.OutputStream
      public abstract write(arg0: number | java.lang.Integer): void
      public write(arg0: number[] | java.lang.Byte[]): void
      public write(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public flush(): void
      public close(): void
    }

  }
}
