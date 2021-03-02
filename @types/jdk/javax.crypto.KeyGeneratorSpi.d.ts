declare namespace javax {
  namespace crypto {

    abstract class KeyGeneratorSpi {
      public constructor()
      protected abstract engineInit(arg0: java.security.SecureRandom): void
      protected abstract engineInit(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
      protected abstract engineInit(arg0: number | java.lang.Integer, arg1: java.security.SecureRandom): void
      protected abstract engineGenerateKey(): javax.crypto.SecretKey
    }

  }
}
