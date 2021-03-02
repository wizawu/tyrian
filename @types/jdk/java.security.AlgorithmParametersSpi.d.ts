declare namespace java {
  namespace security {

    abstract class AlgorithmParametersSpi {
      public constructor()
      protected abstract engineInit(arg0: java.security.spec.AlgorithmParameterSpec): void
      protected abstract engineInit(arg0: byte[]): void
      protected abstract engineInit(arg0: byte[], arg1: java.lang.String): void
      protected abstract engineGetParameterSpec<T extends java.security.spec.AlgorithmParameterSpec>(arg0: java.lang.Class<T>): T
      protected abstract engineGetEncoded(): byte[]
      protected abstract engineGetEncoded(arg0: java.lang.String): byte[]
      protected abstract engineToString(): java.lang.String
    }

  }
}
