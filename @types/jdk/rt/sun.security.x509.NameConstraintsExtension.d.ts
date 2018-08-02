declare namespace sun {
    namespace security {
        namespace x509 {
            class NameConstraintsExtension extends sun.security.x509.Extension implements sun.security.x509.CertAttrSet<java.lang.String> , java.lang.Cloneable {
                public static IDENT: string
                public static NAME: string
                public static PERMITTED_SUBTREES: string
                public static EXCLUDED_SUBTREES: string
                public constructor(arg0: sun.security.x509.GeneralSubtrees, arg1: sun.security.x509.GeneralSubtrees)
                public constructor(arg0: java.lang.Boolean | boolean, arg1: java.lang.Object)
                public toString(): string
                public encode(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                public set(arg0: java.lang.String | string, arg1: java.lang.Object): void
                public get(arg0: java.lang.String | string): sun.security.x509.GeneralSubtrees
                public delete(arg0: java.lang.String | string): void
                public getElements(): java.util.Enumeration<java.lang.String>
                public getName(): string
                public merge(arg0: sun.security.x509.NameConstraintsExtension): void
                public verify(arg0: java.security.cert.X509Certificate): boolean
                public verify(arg0: sun.security.x509.GeneralNameInterface): boolean
                public clone(): java.lang.Object
                public get(arg0: java.lang.String | string): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}