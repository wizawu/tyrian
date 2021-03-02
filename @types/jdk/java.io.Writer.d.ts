declare namespace java {
  namespace io {

    abstract class Writer implements java.lang.Appendable, java.io.Closeable, java.io.Flushable {
      protected lock: java.lang.Object
      public static nullWriter(): java.io.Writer
      protected constructor()
      protected constructor(arg0: java.lang.Object | any)
      public write(arg0: number | java.lang.Integer): void
      public write(arg0: char[]): void
      public abstract write(arg0: char[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public write(arg0: java.lang.String | string): void
      public write(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public append(arg0: java.lang.CharSequence): java.io.Writer
      public append(arg0: java.lang.CharSequence, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): java.io.Writer
      public append(arg0: string | java.lang.Character): java.io.Writer
      public abstract flush(): void
      public abstract close(): void
      public append(arg0: string | java.lang.Character): java.lang.Appendable
      public append(arg0: java.lang.CharSequence, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): java.lang.Appendable
      public append(arg0: java.lang.CharSequence): java.lang.Appendable
    }

  }
}
