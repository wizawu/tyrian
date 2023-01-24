declare namespace java {
  namespace io {
    class OutputStreamWriter extends java.io.Writer {
      public constructor(arg0: java.io.OutputStream, arg1: java.lang.String | string)
      public constructor(arg0: java.io.OutputStream)
      public constructor(arg0: java.io.OutputStream, arg1: java.nio.charset.Charset)
      public constructor(arg0: java.io.OutputStream, arg1: java.nio.charset.CharsetEncoder)
      public getEncoding(): java.lang.String
      flushBuffer(): void
      public write(arg0: number | java.lang.Integer): void
      public write(
        arg0: string[] | java.lang.Character[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): void
      public write(
        arg0: java.lang.String | string,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): void
      public append(
        arg0: string | java.lang.CharSequence,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): java.io.Writer
      public append(arg0: string | java.lang.CharSequence): java.io.Writer
      public flush(): void
      public close(): void
      public append(
        arg0: string | java.lang.CharSequence,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): java.lang.Appendable
      public append(arg0: string | java.lang.CharSequence): java.lang.Appendable
    }
  }
}
