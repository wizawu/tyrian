declare namespace java {
  namespace util {
    class MissingResourceException extends java.lang.RuntimeException {
      public constructor(
        arg0: java.lang.String | string,
        arg1: java.lang.String | string,
        arg2: java.lang.String | string
      )
      constructor(
        arg0: java.lang.String | string,
        arg1: java.lang.String | string,
        arg2: java.lang.String | string,
        arg3: java.lang.Throwable
      )
      public getClassName(): java.lang.String
      public getKey(): java.lang.String
    }
  }
}
