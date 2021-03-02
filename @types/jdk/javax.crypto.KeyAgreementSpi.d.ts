declare namespace javax {
  namespace crypto {

    abstract class KeyAgreementSpi {
      public constructor()
      protected abstract engineInit(arg0: java.security.Key, arg1: java.security.SecureRandom): void
      protected abstract engineInit(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec, arg2: java.security.SecureRandom): void
      protected abstract engineDoPhase(arg0: java.security.Key, arg1: boolean | java.lang.Boolean): java.security.Key
      protected abstract engineGenerateSecret(): number[]
      protected abstract engineGenerateSecret(arg0: byte[], arg1: number | java.lang.Integer): number
      protected abstract engineGenerateSecret(arg0: java.lang.String | string): javax.crypto.SecretKey
    }

  }
}
