declare namespace sun {
    namespace security {
        namespace rsa {
            class RSAPrivateCrtKeyImpl extends sun.security.pkcs.PKCS8Key implements java.security.interfaces.RSAPrivateCrtKey {
                public static newKey(arg0: byte[]): java.security.interfaces.RSAPrivateKey
                public getAlgorithm(): string
                public getModulus(): java.math.BigInteger
                public getPublicExponent(): java.math.BigInteger
                public getPrivateExponent(): java.math.BigInteger
                public getPrimeP(): java.math.BigInteger
                public getPrimeQ(): java.math.BigInteger
                public getPrimeExponentP(): java.math.BigInteger
                public getPrimeExponentQ(): java.math.BigInteger
                public getCrtCoefficient(): java.math.BigInteger
                protected parseKeyBits(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}