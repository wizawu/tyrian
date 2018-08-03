declare namespace sun {
    namespace security {
        namespace x509 {
            class CertificateVersion implements sun.security.x509.CertAttrSet<java.lang.String> {
                public static V1: int
                public static V2: int
                public static V3: int
                public static IDENT: string
                public static NAME: string
                public static VERSION: string
                public constructor()
                public constructor(arg0: int)
                public constructor(arg0: sun.security.util.DerInputStream)
                public constructor(arg0: java.io.InputStream)
                public constructor(arg0: sun.security.util.DerValue)
                public toString(): string
                public encode(arg0: java.io.OutputStream): void
                public set(arg0: java.lang.String | string, arg1: java.lang.Object): void
                public get(arg0: java.lang.String | string): java.lang.Integer
                public delete(arg0: java.lang.String | string): void
                public getElements(): java.util.Enumeration<java.lang.String>
                public getName(): string
                public compare(arg0: int): int
                public get(arg0: java.lang.String | string): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}