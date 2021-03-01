declare namespace java {
  namespace util {

    class Formatter implements java.io.Closeable, java.io.Flushable {

      public constructor()
      public constructor(arg0: java.lang.Appendable)
      public constructor(arg0: java.util.Locale)
      public constructor(arg0: java.lang.Appendable, arg1: java.util.Locale)
      public constructor(arg0: java.lang.String)
      public constructor(arg0: java.lang.String, arg1: java.lang.String)
      public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: java.util.Locale)
      public constructor(arg0: java.lang.String, arg1: java.nio.charset.Charset, arg2: java.util.Locale)
      public constructor(arg0: java.io.File)
      public constructor(arg0: java.io.File, arg1: java.lang.String)
      public constructor(arg0: java.io.File, arg1: java.lang.String, arg2: java.util.Locale)
      public constructor(arg0: java.io.File, arg1: java.nio.charset.Charset, arg2: java.util.Locale)
      public constructor(arg0: java.io.PrintStream)
      public constructor(arg0: java.io.OutputStream)
      public constructor(arg0: java.io.OutputStream, arg1: java.lang.String)
      public constructor(arg0: java.io.OutputStream, arg1: java.lang.String, arg2: java.util.Locale)
      public constructor(arg0: java.io.OutputStream, arg1: java.nio.charset.Charset, arg2: java.util.Locale)
      public locale(): java.util.Locale
      public out(): java.lang.Appendable
      public toString(): java.lang.String
      public flush(): void
      public close(): void
      public ioException(): java.io.IOException
      public format(arg0: java.lang.String, ...arg1: java.lang.Object[]): java.util.Formatter
      public format(arg0: java.util.Locale, arg1: java.lang.String, ...arg2: java.lang.Object[]): java.util.Formatter
    }

  }
}
