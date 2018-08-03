declare namespace sun {
    namespace security {
        namespace pkcs11 {
            class P11Key$P11DHPublicKey extends sun.security.pkcs11.P11Key implements javax.crypto.interfaces.DHPublicKey {
                public getFormat(): string
                public getY(): java.math.BigInteger
                public getParams(): javax.crypto.spec.DHParameterSpec
                public toString(): string
                public hashCode(): int
                public equals(arg0: java.lang.Object): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}