declare namespace java {
  namespace security {

    class Security {
      public static getAlgorithmProperty(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.String
      public static insertProviderAt(arg0: java.security.Provider, arg1: number | java.lang.Integer): number
      public static addProvider(arg0: java.security.Provider): number
      public static removeProvider(arg0: java.lang.String | string): void
      public static getProviders(): java.security.Provider[]
      public static getProvider(arg0: java.lang.String | string): java.security.Provider
      public static getProviders(arg0: java.lang.String | string): java.security.Provider[]
      public static getProviders(arg0: java.util.Map<java.lang.String,java.lang.String>): java.security.Provider[]
      static getImpl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): java.lang.Object[]
      static getImpl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.Object | any): java.lang.Object[]
      static getImpl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.security.Provider): java.lang.Object[]
      static getImpl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.security.Provider, arg3: java.lang.Object | any): java.lang.Object[]
      public static getProperty(arg0: java.lang.String | string): java.lang.String
      public static setProperty(arg0: java.lang.String | string, arg1: java.lang.String | string): void
      static getFilterComponents(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.String[]
      public static getAlgorithms(arg0: java.lang.String | string): java.util.Set<java.lang.String>
    }

  }
}
