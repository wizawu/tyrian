declare namespace sun {
    namespace security {
        namespace x509 {
            class IssuerAlternativeNameExtension extends sun.security.x509.Extension implements sun.security.x509.CertAttrSet<java.lang.String> {
                public static readonly IDENT: string
                public static readonly NAME: string
                public static readonly ISSUER_NAME: string
                public constructor(arg0: sun.security.x509.GeneralNames)
                public constructor(arg0: java.lang.Boolean | boolean, arg1: sun.security.x509.GeneralNames)
                public constructor()
                public constructor(arg0: java.lang.Boolean | boolean, arg1: java.lang.Object)
                public toString(): string
                public encode(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                public set(arg0: java.lang.String | string, arg1: java.lang.Object): void
                public get(arg0: java.lang.String | string): sun.security.x509.GeneralNames
                public delete(arg0: java.lang.String | string): void
                public getElements(): java.util.Enumeration<java.lang.String>
                public getName(): string
                public get(arg0: java.lang.String | string): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}