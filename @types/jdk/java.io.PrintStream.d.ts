declare namespace java {
  namespace io {

    class PrintStream extends java.io.FilterOutputStream implements java.lang.Appendable, java.io.Closeable {
      public constructor(arg0: java.io.OutputStream)
      public constructor(arg0: java.io.OutputStream, arg1: boolean | java.lang.Boolean)
      public constructor(arg0: java.io.OutputStream, arg1: boolean | java.lang.Boolean, arg2: java.lang.String | string)
      public constructor(arg0: java.io.OutputStream, arg1: boolean | java.lang.Boolean, arg2: java.nio.charset.Charset)
      public constructor(arg0: java.lang.String | string)
      public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
      public constructor(arg0: java.lang.String | string, arg1: java.nio.charset.Charset)
      public constructor(arg0: java.io.File)
      public constructor(arg0: java.io.File, arg1: java.lang.String | string)
      public constructor(arg0: java.io.File, arg1: java.nio.charset.Charset)
      public flush(): void
      public close(): void
      public checkError(): boolean
      protected setError(): void
      protected clearError(): void
      public write(arg0: number | java.lang.Integer): void
      public write(arg0: number[] | java.lang.Byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public print(arg0: boolean | java.lang.Boolean): void
      public print(arg0: string | java.lang.Character): void
      public print(arg0: number | java.lang.Integer): void
      public print(arg0: number | java.lang.Long): void
      public print(arg0: number | java.lang.Float): void
      public print(arg0: number | java.lang.Double): void
      public print(arg0: string[] | java.lang.Character[]): void
      public print(arg0: java.lang.String | string): void
      public print(arg0: java.lang.Object | any): void
      public println(): void
      public println(arg0: boolean | java.lang.Boolean): void
      public println(arg0: string | java.lang.Character): void
      public println(arg0: number | java.lang.Integer): void
      public println(arg0: number | java.lang.Long): void
      public println(arg0: number | java.lang.Float): void
      public println(arg0: number | java.lang.Double): void
      public println(arg0: string[] | java.lang.Character[]): void
      public println(arg0: java.lang.String | string): void
      public println(arg0: java.lang.Object | any): void
      public printf(arg0: java.lang.String | string, ...vargs: (java.lang.Object | any)[]): java.io.PrintStream
      public printf(arg0: java.util.Locale, arg1: java.lang.String | string, ...vargs: (java.lang.Object | any)[]): java.io.PrintStream
      public format(arg0: java.lang.String | string, ...vargs: (java.lang.Object | any)[]): java.io.PrintStream
      public format(arg0: java.util.Locale, arg1: java.lang.String | string, ...vargs: (java.lang.Object | any)[]): java.io.PrintStream
      public append(arg0: java.lang.CharSequence): java.io.PrintStream
      public append(arg0: java.lang.CharSequence, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): java.io.PrintStream
      public append(arg0: string | java.lang.Character): java.io.PrintStream
      public append(arg0: string | java.lang.Character): java.lang.Appendable
      public append(arg0: java.lang.CharSequence, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): java.lang.Appendable
      public append(arg0: java.lang.CharSequence): java.lang.Appendable
    }

  }
}
