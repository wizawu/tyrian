declare namespace javax {
  namespace crypto {

    abstract class ExemptionMechanismSpi {
      public constructor()
      protected abstract engineGetOutputSize(arg0: number | java.lang.Integer): number
      protected abstract engineInit(arg0: java.security.Key): void
      protected abstract engineInit(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec): void
      protected abstract engineInit(arg0: java.security.Key, arg1: java.security.AlgorithmParameters): void
      protected abstract engineGenExemptionBlob(): number[]
      protected abstract engineGenExemptionBlob(arg0: byte[], arg1: number | java.lang.Integer): number
    }

  }
}
