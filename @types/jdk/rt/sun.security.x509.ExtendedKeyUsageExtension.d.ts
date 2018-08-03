declare namespace sun {
    namespace security {
        namespace x509 {
            class ExtendedKeyUsageExtension extends sun.security.x509.Extension implements sun.security.x509.CertAttrSet<java.lang.String> {
                public static IDENT: string
                public static NAME: string
                public static USAGES: string
                public constructor(arg0: java.util.Vector<sun.security.util.ObjectIdentifier>)
                public constructor(arg0: java.lang.Boolean | boolean, arg1: java.util.Vector<sun.security.util.ObjectIdentifier>)
                public constructor(arg0: java.lang.Boolean | boolean, arg1: java.lang.Object)
                public toString(): string
                public encode(arg0: java.io.OutputStream): void
                public set(arg0: java.lang.String | string, arg1: java.lang.Object): void
                public get(arg0: java.lang.String | string): java.util.Vector<sun.security.util.ObjectIdentifier>
                public delete(arg0: java.lang.String | string): void
                public getElements(): java.util.Enumeration<java.lang.String>
                public getName(): string
                public getExtendedKeyUsage(): java.util.List<java.lang.String>
                public get(arg0: java.lang.String | string): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}