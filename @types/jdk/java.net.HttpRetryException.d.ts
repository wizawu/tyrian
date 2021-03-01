declare namespace java {
  namespace net {

    class HttpRetryException extends java.io.IOException {

      public constructor(arg0: java.lang.String, arg1: int)
      public constructor(arg0: java.lang.String, arg1: int, arg2: java.lang.String)
      public responseCode(): int
      public getReason(): java.lang.String
      public getLocation(): java.lang.String
    }

  }
}
