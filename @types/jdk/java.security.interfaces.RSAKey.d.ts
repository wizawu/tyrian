declare namespace java {
  namespace security {
    namespace interfaces {
      interface RSAKey {
        getModulus(): java.math.BigInteger
        getParams?(): java.security.spec.AlgorithmParameterSpec
      }
    }
  }
}
