declare namespace java {
    namespace security {
        namespace cert {
            class CertPathBuilder {
                protected constructor(arg0: java.security.cert.CertPathBuilderSpi, arg1: java.security.Provider, arg2: java.lang.String | string)
                public static getInstance(arg0: java.lang.String | string): java.security.cert.CertPathBuilder
                public static getInstance(arg0: java.lang.String | string, arg1: java.lang.String | string): java.security.cert.CertPathBuilder
                public static getInstance(arg0: java.lang.String | string, arg1: java.security.Provider): java.security.cert.CertPathBuilder
                public getProvider(): java.security.Provider
                public getAlgorithm(): string
                public build(arg0: java.security.cert.CertPathParameters | java.security.cert.CertPathParameters$$Lambda): java.security.cert.CertPathBuilderResult
                public static getDefaultType(): string
                public getRevocationChecker(): java.security.cert.CertPathChecker
                public static class: java.lang.Class<any>
            }
        }
    }
}