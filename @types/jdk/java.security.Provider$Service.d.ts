declare namespace java {
  namespace security {

    class Provider$Service {

      addAttribute(arg0: java.lang.String, arg1: java.lang.String): void
      public constructor(arg0: java.security.Provider, arg1: java.lang.String, arg2: java.lang.String, arg3: java.lang.String, arg4: java.util.List<java.lang.String>, arg5: java.util.Map<java.lang.String,java.lang.String>)
      public readonly getType(): java.lang.String
      public readonly getAlgorithm(): java.lang.String
      public readonly getProvider(): java.security.Provider
      public readonly getClassName(): java.lang.String
      public readonly getAttribute(arg0: java.lang.String): java.lang.String
      public newInstance(arg0: java.lang.Object): java.lang.Object
      public supportsParameter(arg0: java.lang.Object): boolean
      public toString(): java.lang.String
    }

  }
}
