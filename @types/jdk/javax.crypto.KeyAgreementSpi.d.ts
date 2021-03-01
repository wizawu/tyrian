declare namespace javax {
  namespace crypto {

    abstract class KeyAgreementSpi {

      public constructor()
      protected abstract engineInit(arg0: java.security.Key, arg1: java.security.SecureRandom): void
      protected abstract engineInit(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec, arg2: java.security.SecureRandom): void
      protected abstract engineDoPhase(arg0: java.security.Key, arg1: boolean): java.security.Key
      protected abstract engineGenerateSecret(): byte[]
      protected abstract engineGenerateSecret(arg0: byte[], arg1: int): int
      protected abstract engineGenerateSecret(arg0: java.lang.String): javax.crypto.SecretKey
    }

  }
}
