declare namespace java {
    namespace security {
        class CodeSource implements java.io.Serializable {
            public constructor(arg0: java.net.URL, arg1: java.security.cert.Certificate[])
            public constructor(arg0: java.net.URL, arg1: java.security.CodeSigner[])
            public hashCode(): int
            public equals(arg0: java.lang.Object): boolean
            public getLocation(): java.net.URL
            public getCertificates(): java.security.cert.Certificate[]
            public getCodeSigners(): java.security.CodeSigner[]
            public implies(arg0: java.security.CodeSource): boolean
            public toString(): string
            public static class: java.lang.Class<any>
        }
    }
}