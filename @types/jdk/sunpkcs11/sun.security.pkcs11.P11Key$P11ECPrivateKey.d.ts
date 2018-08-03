declare namespace sun {
    namespace security {
        namespace pkcs11 {
            class P11Key$P11ECPrivateKey extends sun.security.pkcs11.P11Key implements java.security.interfaces.ECPrivateKey {
                public getFormat(): string
                public getS(): java.math.BigInteger
                public getParams(): java.security.spec.ECParameterSpec
                public static class: java.lang.Class<any>
            }
        }
    }
}