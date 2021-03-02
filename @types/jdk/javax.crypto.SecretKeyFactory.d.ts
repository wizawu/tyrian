declare namespace javax {
  namespace crypto {

    class SecretKeyFactory {
      protected constructor(arg0: javax.crypto.SecretKeyFactorySpi, arg1: java.security.Provider, arg2: java.lang.String | string)
      public static getInstance(arg0: java.lang.String | string): javax.crypto.SecretKeyFactory
      public static getInstance(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.crypto.SecretKeyFactory
      public static getInstance(arg0: java.lang.String | string, arg1: java.security.Provider): javax.crypto.SecretKeyFactory
      public getProvider(): java.security.Provider
      public getAlgorithm(): java.lang.String
      public generateSecret(arg0: java.security.spec.KeySpec): javax.crypto.SecretKey
      public getKeySpec(arg0: javax.crypto.SecretKey, arg1: java.lang.Class<unknown>): java.security.spec.KeySpec
      public translateKey(arg0: javax.crypto.SecretKey): javax.crypto.SecretKey
    }

  }
}
