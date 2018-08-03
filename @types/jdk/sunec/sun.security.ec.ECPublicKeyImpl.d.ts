declare namespace sun {
    namespace security {
        namespace ec {
            class ECPublicKeyImpl extends sun.security.x509.X509Key implements java.security.interfaces.ECPublicKey {
                public constructor(arg0: java.security.spec.ECPoint, arg1: java.security.spec.ECParameterSpec)
                public constructor(arg0: byte[])
                public getAlgorithm(): string
                public getW(): java.security.spec.ECPoint
                public getParams(): java.security.spec.ECParameterSpec
                public getEncodedPublicValue(): byte[]
                protected parseKeyBits(): void
                public toString(): string
                protected writeReplace(): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}