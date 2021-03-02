declare namespace java {
  namespace security {
    namespace spec {

      class RSAMultiPrimePrivateCrtKeySpec extends java.security.spec.RSAPrivateKeySpec {
        public constructor(arg0: java.math.BigInteger, arg1: java.math.BigInteger, arg2: java.math.BigInteger, arg3: java.math.BigInteger, arg4: java.math.BigInteger, arg5: java.math.BigInteger, arg6: java.math.BigInteger, arg7: java.math.BigInteger, arg8: java.security.spec.RSAOtherPrimeInfo[])
        public constructor(arg0: java.math.BigInteger, arg1: java.math.BigInteger, arg2: java.math.BigInteger, arg3: java.math.BigInteger, arg4: java.math.BigInteger, arg5: java.math.BigInteger, arg6: java.math.BigInteger, arg7: java.math.BigInteger, arg8: java.security.spec.RSAOtherPrimeInfo[], arg9: java.security.spec.AlgorithmParameterSpec)
        public getPublicExponent(): java.math.BigInteger
        public getPrimeP(): java.math.BigInteger
        public getPrimeQ(): java.math.BigInteger
        public getPrimeExponentP(): java.math.BigInteger
        public getPrimeExponentQ(): java.math.BigInteger
        public getCrtCoefficient(): java.math.BigInteger
        public getOtherPrimeInfo(): java.security.spec.RSAOtherPrimeInfo[]
      }

    }
  }
}
