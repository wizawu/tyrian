declare namespace javax {
  namespace xml {
    namespace crypto {

      interface AlgorithmMethod {

        getAlgorithm(): java.lang.String
        getParameterSpec(): java.security.spec.AlgorithmParameterSpec
      }

    }
  }
}
