declare namespace sun {
    namespace security {
        namespace pkcs11 {
            class P11Key$P11RSAPrivateKey extends sun.security.pkcs11.P11Key implements java.security.interfaces.RSAPrivateCrtKey {
                public getFormat(): string
                public getModulus(): java.math.BigInteger
                public getPublicExponent(): java.math.BigInteger
                public getPrivateExponent(): java.math.BigInteger
                public getPrimeP(): java.math.BigInteger
                public getPrimeQ(): java.math.BigInteger
                public getPrimeExponentP(): java.math.BigInteger
                public getPrimeExponentQ(): java.math.BigInteger
                public getCrtCoefficient(): java.math.BigInteger
            }
        }
    }
}