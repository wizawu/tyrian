declare namespace java {
  namespace security {
    namespace spec {

      class RSAOtherPrimeInfo {

        public constructor(arg0: java.math.BigInteger, arg1: java.math.BigInteger, arg2: java.math.BigInteger)
        public readonly getPrime(): java.math.BigInteger
        public readonly getExponent(): java.math.BigInteger
        public readonly getCrtCoefficient(): java.math.BigInteger
      }

    }
  }
}
