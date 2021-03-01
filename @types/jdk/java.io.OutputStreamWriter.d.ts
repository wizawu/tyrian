declare namespace java {
  namespace io {

    class OutputStreamWriter extends java.io.Writer {

      public constructor(arg0: java.io.OutputStream, arg1: java.lang.String)
      public constructor(arg0: java.io.OutputStream)
      public constructor(arg0: java.io.OutputStream, arg1: java.nio.charset.Charset)
      public constructor(arg0: java.io.OutputStream, arg1: java.nio.charset.CharsetEncoder)
      public getEncoding(): java.lang.String
      flushBuffer(): void
      public write(arg0: int): void
      public write(arg0: char[], arg1: int, arg2: int): void
      public write(arg0: java.lang.String, arg1: int, arg2: int): void
      public append(arg0: java.lang.CharSequence, arg1: int, arg2: int): java.io.Writer
      public append(arg0: java.lang.CharSequence): java.io.Writer
      public flush(): void
      public close(): void
      public append(arg0: java.lang.CharSequence, arg1: int, arg2: int): java.lang.Appendable
      public append(arg0: java.lang.CharSequence): java.lang.Appendable
    }

  }
}
