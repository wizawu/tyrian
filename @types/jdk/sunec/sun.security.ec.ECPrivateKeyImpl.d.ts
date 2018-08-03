declare namespace sun {
    namespace security {
        namespace ec {
            class ECPrivateKeyImpl extends sun.security.pkcs.PKCS8Key implements java.security.interfaces.ECPrivateKey {
                public constructor(arg0: byte[])
                public constructor(arg0: java.math.BigInteger, arg1: java.security.spec.ECParameterSpec)
                public getAlgorithm(): string
                public getS(): java.math.BigInteger
                public getParams(): java.security.spec.ECParameterSpec
                protected parseKeyBits(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}