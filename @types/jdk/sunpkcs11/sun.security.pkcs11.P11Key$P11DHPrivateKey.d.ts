declare namespace sun {
    namespace security {
        namespace pkcs11 {
            class P11Key$P11DHPrivateKey extends sun.security.pkcs11.P11Key implements javax.crypto.interfaces.DHPrivateKey {
                public getFormat(): string
                public getX(): java.math.BigInteger
                public getParams(): javax.crypto.spec.DHParameterSpec
                public hashCode(): int
                public equals(arg0: java.lang.Object): boolean
            }
        }
    }
}