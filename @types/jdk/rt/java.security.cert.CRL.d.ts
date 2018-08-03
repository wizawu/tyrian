declare namespace java {
    namespace security {
        namespace cert {
            abstract class CRL {
                protected constructor(arg0: java.lang.String | string)
                public getType(): string
                public abstract toString(): string
                public abstract isRevoked(arg0: java.security.cert.Certificate): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}