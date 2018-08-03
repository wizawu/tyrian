declare namespace sun {
    namespace security {
        namespace x509 {
            class PrivateKeyUsageExtension extends sun.security.x509.Extension implements sun.security.x509.CertAttrSet<java.lang.String> {
                public static IDENT: string
                public static NAME: string
                public static NOT_BEFORE: string
                public static NOT_AFTER: string
                public constructor(arg0: java.util.Date, arg1: java.util.Date)
                public constructor(arg0: java.lang.Boolean | boolean, arg1: java.lang.Object)
                public toString(): string
                public valid(): void
                public valid(arg0: java.util.Date): void
                public encode(arg0: java.io.OutputStream): void
                public set(arg0: java.lang.String | string, arg1: java.lang.Object): void
                public get(arg0: java.lang.String | string): java.util.Date
                public delete(arg0: java.lang.String | string): void
                public getElements(): java.util.Enumeration<java.lang.String>
                public getName(): string
                public get(arg0: java.lang.String | string): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}