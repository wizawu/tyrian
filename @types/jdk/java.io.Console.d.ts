declare namespace java {
  namespace io {

    class Console implements java.io.Flushable {
      static readonly $assertionsDisabled: boolean
      public writer(): java.io.PrintWriter
      public reader(): java.io.Reader
      public format(arg0: java.lang.String, ...arg1: java.lang.Object[]): java.io.Console
      public printf(arg0: java.lang.String, ...arg1: java.lang.Object[]): java.io.Console
      public readLine(arg0: java.lang.String, ...arg1: java.lang.Object[]): java.lang.String
      public readLine(): java.lang.String
      public readPassword(arg0: java.lang.String, ...arg1: java.lang.Object[]): char[]
      public readPassword(): char[]
      public flush(): void
    }

  }
}
