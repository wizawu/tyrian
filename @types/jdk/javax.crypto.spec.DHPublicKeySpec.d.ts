declare namespace javax {
  namespace crypto {
    namespace spec {

      class DHPublicKeySpec implements java.security.spec.KeySpec {
        public constructor(arg0: java.math.BigInteger, arg1: java.math.BigInteger, arg2: java.math.BigInteger)
        public getY(): java.math.BigInteger
        public getP(): java.math.BigInteger
        public getG(): java.math.BigInteger
      }

    }
  }
}
