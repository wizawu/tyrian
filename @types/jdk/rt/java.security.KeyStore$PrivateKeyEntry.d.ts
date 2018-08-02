declare namespace java {
    namespace security {
        class KeyStore$PrivateKeyEntry implements java.security.KeyStore$Entry {
            public constructor(arg0: java.security.PrivateKey, arg1: java.security.cert.Certificate[])
            public constructor(arg0: java.security.PrivateKey, arg1: java.security.cert.Certificate[], arg2: java.util.Set<java.security.KeyStore$Entry$Attribute>)
            public getPrivateKey(): java.security.PrivateKey
            public getCertificateChain(): java.security.cert.Certificate[]
            public getCertificate(): java.security.cert.Certificate
            public getAttributes(): java.util.Set<java.security.KeyStore$Entry$Attribute>
            public toString(): string
            public static class: java.lang.Class<any>
        }
        class KeyStore$PrivateKeyEntry$$Lambda implements java.security.KeyStore$Entry {
            public constructor(arg0: java.security.PrivateKey, arg1: java.security.cert.Certificate[])
        }
    }
}