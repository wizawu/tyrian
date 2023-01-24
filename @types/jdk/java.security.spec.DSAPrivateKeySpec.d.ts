declare namespace java {
  namespace security {
    namespace spec {
      class DSAPrivateKeySpec implements java.security.spec.KeySpec {
        public constructor(
          arg0: java.math.BigInteger,
          arg1: java.math.BigInteger,
          arg2: java.math.BigInteger,
          arg3: java.math.BigInteger
        )
        public getX(): java.math.BigInteger
        public getP(): java.math.BigInteger
        public getQ(): java.math.BigInteger
        public getG(): java.math.BigInteger
      }
    }
  }
}
