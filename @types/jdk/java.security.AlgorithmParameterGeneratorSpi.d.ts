declare namespace java {
  namespace security {

    abstract class AlgorithmParameterGeneratorSpi {
      public constructor()
      protected abstract engineInit(arg0: int, arg1: java.security.SecureRandom): void
      protected abstract engineInit(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
      protected abstract engineGenerateParameters(): java.security.AlgorithmParameters
    }

  }
}
