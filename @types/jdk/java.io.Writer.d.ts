declare namespace java {
  namespace io {

    abstract class Writer implements java.lang.Appendable, java.io.Closeable, java.io.Flushable {
      protected lock: java.lang.Object
      public static nullWriter(): java.io.Writer
      protected constructor()
      protected constructor(arg0: java.lang.Object)
      public write(arg0: int): void
      public write(arg0: char[]): void
      public abstract write(arg0: char[], arg1: int, arg2: int): void
      public write(arg0: java.lang.String): void
      public write(arg0: java.lang.String, arg1: int, arg2: int): void
      public append(arg0: java.lang.CharSequence): java.io.Writer
      public append(arg0: java.lang.CharSequence, arg1: int, arg2: int): java.io.Writer
      public append(arg0: char): java.io.Writer
      public abstract flush(): void
      public abstract close(): void
      public append(arg0: char): java.lang.Appendable
      public append(arg0: java.lang.CharSequence, arg1: int, arg2: int): java.lang.Appendable
      public append(arg0: java.lang.CharSequence): java.lang.Appendable
    }

  }
}
