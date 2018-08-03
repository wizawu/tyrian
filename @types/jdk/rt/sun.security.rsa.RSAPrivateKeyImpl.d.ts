declare namespace sun {
    namespace security {
        namespace rsa {
            class RSAPrivateKeyImpl extends sun.security.pkcs.PKCS8Key implements java.security.interfaces.RSAPrivateKey {
                public getAlgorithm(): string
                public getModulus(): java.math.BigInteger
                public getPrivateExponent(): java.math.BigInteger
                public static class: java.lang.Class<any>
            }
        }
    }
}