declare namespace sun {
    namespace security {
        namespace pkcs11 {
            class P11Key$P11DSAPublicKey extends sun.security.pkcs11.P11Key implements java.security.interfaces.DSAPublicKey {
                public getFormat(): string
                public getY(): java.math.BigInteger
                public getParams(): java.security.interfaces.DSAParams
                public toString(): string
            }
        }
    }
}