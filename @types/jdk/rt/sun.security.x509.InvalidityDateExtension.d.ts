declare namespace sun {
    namespace security {
        namespace x509 {
            class InvalidityDateExtension extends sun.security.x509.Extension implements sun.security.x509.CertAttrSet<java.lang.String> {
                public static NAME: string
                public static DATE: string
                public constructor(arg0: java.util.Date)
                public constructor(arg0: boolean, arg1: java.util.Date)
                public constructor(arg0: java.lang.Boolean | boolean, arg1: java.lang.Object)
                public set(arg0: java.lang.String | string, arg1: java.lang.Object): void
                public get(arg0: java.lang.String | string): java.util.Date
                public delete(arg0: java.lang.String | string): void
                public toString(): string
                public encode(arg0: java.io.OutputStream): void
                public getElements(): java.util.Enumeration<java.lang.String>
                public getName(): string
                public static toImpl(arg0: java.security.cert.Extension): sun.security.x509.InvalidityDateExtension
                public get(arg0: java.lang.String | string): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}