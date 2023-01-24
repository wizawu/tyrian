declare namespace javax {
  namespace crypto {
    namespace spec {
      class DHParameterSpec implements java.security.spec.AlgorithmParameterSpec {
        public constructor(arg0: java.math.BigInteger, arg1: java.math.BigInteger)
        public constructor(arg0: java.math.BigInteger, arg1: java.math.BigInteger, arg2: number | java.lang.Integer)
        public getP(): java.math.BigInteger
        public getG(): java.math.BigInteger
        public getL(): number
      }
    }
  }
}
