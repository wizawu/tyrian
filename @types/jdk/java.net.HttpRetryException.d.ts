declare namespace java {
  namespace net {

    class HttpRetryException extends java.io.IOException {
      public constructor(arg0: java.lang.String | string, arg1: number | java.lang.Integer)
      public constructor(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: java.lang.String | string)
      public responseCode(): number
      public getReason(): java.lang.String
      public getLocation(): java.lang.String
    }

  }
}
