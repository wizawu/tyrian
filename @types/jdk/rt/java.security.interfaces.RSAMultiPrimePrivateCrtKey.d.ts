declare namespace java {
    namespace security {
        namespace interfaces {
            interface RSAMultiPrimePrivateCrtKey extends java.security.interfaces.RSAPrivateKey {
                serialVersionUID: long
                getPublicExponent(): java.math.BigInteger
                getPrimeP(): java.math.BigInteger
                getPrimeQ(): java.math.BigInteger
                getPrimeExponentP(): java.math.BigInteger
                getPrimeExponentQ(): java.math.BigInteger
                getCrtCoefficient(): java.math.BigInteger
                getOtherPrimeInfo(): java.security.spec.RSAOtherPrimeInfo[]
            }
        }
    }
}