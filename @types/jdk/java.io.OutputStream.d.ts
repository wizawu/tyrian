declare namespace java {
  namespace io {

    abstract class OutputStream implements java.io.Closeable, java.io.Flushable {

      public constructor()
      public static nullOutputStream(): java.io.OutputStream
      public abstract write(arg0: int): void
      public write(arg0: byte[]): void
      public write(arg0: byte[], arg1: int, arg2: int): void
      public flush(): void
      public close(): void
    }

  }
}
