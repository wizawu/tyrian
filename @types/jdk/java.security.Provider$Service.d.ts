declare namespace java {
  namespace security {
    class Provider$Service {
      addAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string): void
      public constructor(
        arg0: java.security.Provider,
        arg1: java.lang.String | string,
        arg2: java.lang.String | string,
        arg3: java.lang.String | string,
        arg4: java.util.List<java.lang.String>,
        arg5: java.util.Map<java.lang.String, java.lang.String>
      )
      public getType(): java.lang.String
      public getAlgorithm(): java.lang.String
      public getProvider(): java.security.Provider
      public getClassName(): java.lang.String
      public getAttribute(arg0: java.lang.String | string): java.lang.String
      public newInstance(arg0: java.lang.Object | any): java.lang.Object
      public supportsParameter(arg0: java.lang.Object | any): boolean
      public toString(): java.lang.String
    }
  }
}
