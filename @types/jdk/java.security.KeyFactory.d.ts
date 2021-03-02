declare namespace java {
  namespace security {

    class KeyFactory {
      protected constructor(arg0: java.security.KeyFactorySpi, arg1: java.security.Provider, arg2: java.lang.String)
      public static getInstance(arg0: java.lang.String): java.security.KeyFactory
      public static getInstance(arg0: java.lang.String, arg1: java.lang.String): java.security.KeyFactory
      public static getInstance(arg0: java.lang.String, arg1: java.security.Provider): java.security.KeyFactory
      public getProvider(): java.security.Provider
      public getAlgorithm(): java.lang.String
      public generatePublic(arg0: java.security.spec.KeySpec): java.security.PublicKey
      public generatePrivate(arg0: java.security.spec.KeySpec): java.security.PrivateKey
      public getKeySpec<T extends java.security.spec.KeySpec>(arg0: java.security.Key, arg1: java.lang.Class<T>): T
      public translateKey(arg0: java.security.Key): java.security.Key
    }

  }
}
