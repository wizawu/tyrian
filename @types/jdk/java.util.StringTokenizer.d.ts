declare namespace java {
  namespace util {

    class StringTokenizer implements java.util.Enumeration<java.lang.Object> {
      public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: boolean | java.lang.Boolean)
      public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
      public constructor(arg0: java.lang.String | string)
      public hasMoreTokens(): boolean
      public nextToken(): java.lang.String
      public nextToken(arg0: java.lang.String | string): java.lang.String
      public hasMoreElements(): boolean
      public nextElement(): java.lang.Object
      public countTokens(): number
    }

  }
}
