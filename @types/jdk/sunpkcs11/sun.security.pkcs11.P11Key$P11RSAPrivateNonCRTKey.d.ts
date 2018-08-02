declare namespace sun {
    namespace security {
        namespace pkcs11 {
            class P11Key$P11RSAPrivateNonCRTKey extends sun.security.pkcs11.P11Key implements java.security.interfaces.RSAPrivateKey {
                public getFormat(): string
                public getModulus(): java.math.BigInteger
                public getPrivateExponent(): java.math.BigInteger
            }
        }
    }
}