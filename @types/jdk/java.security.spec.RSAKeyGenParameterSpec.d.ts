declare namespace java {
  namespace security {
    namespace spec {
      class RSAKeyGenParameterSpec implements java.security.spec.AlgorithmParameterSpec {
        public static readonly F0: java.math.BigInteger
        public static readonly F4: java.math.BigInteger
        public constructor(arg0: number | java.lang.Integer, arg1: java.math.BigInteger)
        public constructor(
          arg0: number | java.lang.Integer,
          arg1: java.math.BigInteger,
          arg2: java.security.spec.AlgorithmParameterSpec
        )
        public getKeysize(): number
        public getPublicExponent(): java.math.BigInteger
        public getKeyParams(): java.security.spec.AlgorithmParameterSpec
      }
    }
  }
}
