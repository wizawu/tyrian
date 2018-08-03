declare namespace java {
    namespace security {
        namespace cert {
            class CertStore {
                protected constructor(arg0: java.security.cert.CertStoreSpi, arg1: java.security.Provider, arg2: java.lang.String | string, arg3: java.security.cert.CertStoreParameters | java.security.cert.CertStoreParameters$$Lambda)
                public getCertificates(arg0: java.security.cert.CertSelector): java.util.Collection<java.security.cert.Certificate>
                public getCRLs(arg0: java.security.cert.CRLSelector): java.util.Collection<java.security.cert.CRL>
                public static getInstance(arg0: java.lang.String | string, arg1: java.security.cert.CertStoreParameters | java.security.cert.CertStoreParameters$$Lambda): java.security.cert.CertStore
                public static getInstance(arg0: java.lang.String | string, arg1: java.security.cert.CertStoreParameters | java.security.cert.CertStoreParameters$$Lambda, arg2: java.lang.String | string): java.security.cert.CertStore
                public static getInstance(arg0: java.lang.String | string, arg1: java.security.cert.CertStoreParameters | java.security.cert.CertStoreParameters$$Lambda, arg2: java.security.Provider): java.security.cert.CertStore
                public getCertStoreParameters(): java.security.cert.CertStoreParameters
                public getType(): string
                public getProvider(): java.security.Provider
                public static getDefaultType(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}