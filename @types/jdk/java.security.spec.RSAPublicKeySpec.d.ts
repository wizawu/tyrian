declare namespace java {
  namespace security {
    namespace spec {
      class RSAPublicKeySpec implements java.security.spec.KeySpec {
        public constructor(arg0: java.math.BigInteger, arg1: java.math.BigInteger)
        public constructor(
          arg0: java.math.BigInteger,
          arg1: java.math.BigInteger,
          arg2: java.security.spec.AlgorithmParameterSpec
        )
        public getModulus(): java.math.BigInteger
        public getPublicExponent(): java.math.BigInteger
        public getParams(): java.security.spec.AlgorithmParameterSpec
      }
    }
  }
}
