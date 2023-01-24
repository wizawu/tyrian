declare namespace java {
  namespace security {
    namespace interfaces {
      interface RSAPrivateCrtKey extends java.security.interfaces.RSAPrivateKey {
        readonly serialVersionUID: long
        getPublicExponent(): java.math.BigInteger
        getPrimeP(): java.math.BigInteger
        getPrimeQ(): java.math.BigInteger
        getPrimeExponentP(): java.math.BigInteger
        getPrimeExponentQ(): java.math.BigInteger
        getCrtCoefficient(): java.math.BigInteger
      }
    }
  }
}
