declare namespace java {
  namespace util {

    class StringTokenizer implements java.util.Enumeration<java.lang.Object> {
      public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: boolean)
      public constructor(arg0: java.lang.String, arg1: java.lang.String)
      public constructor(arg0: java.lang.String)
      public hasMoreTokens(): boolean
      public nextToken(): java.lang.String
      public nextToken(arg0: java.lang.String): java.lang.String
      public hasMoreElements(): boolean
      public nextElement(): java.lang.Object
      public countTokens(): int
    }

  }
}
