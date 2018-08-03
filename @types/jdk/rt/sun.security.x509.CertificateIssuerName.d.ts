declare namespace sun {
    namespace security {
        namespace x509 {
            class CertificateIssuerName implements sun.security.x509.CertAttrSet<java.lang.String> {
                public static readonly IDENT: string
                public static readonly NAME: string
                public static readonly DN_NAME: string
                public static readonly DN_PRINCIPAL: string
                public constructor(arg0: sun.security.x509.X500Name)
                public constructor(arg0: sun.security.util.DerInputStream)
                public constructor(arg0: java.io.InputStream | java.io.InputStream$$Lambda)
                public toString(): string
                public encode(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                public set(arg0: java.lang.String | string, arg1: java.lang.Object): void
                public get(arg0: java.lang.String | string): java.lang.Object
                public delete(arg0: java.lang.String | string): void
                public getElements(): java.util.Enumeration<java.lang.String>
                public getName(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}