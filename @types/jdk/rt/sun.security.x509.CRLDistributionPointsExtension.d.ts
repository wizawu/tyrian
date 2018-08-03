declare namespace sun {
    namespace security {
        namespace x509 {
            class CRLDistributionPointsExtension extends sun.security.x509.Extension implements sun.security.x509.CertAttrSet<java.lang.String> {
                public static IDENT: string
                public static NAME: string
                public static POINTS: string
                public constructor(arg0: java.util.List<sun.security.x509.DistributionPoint>)
                public constructor(arg0: boolean, arg1: java.util.List<sun.security.x509.DistributionPoint>)
                protected constructor(arg0: sun.security.util.ObjectIdentifier, arg1: boolean, arg2: java.util.List<sun.security.x509.DistributionPoint>, arg3: java.lang.String | string)
                public constructor(arg0: java.lang.Boolean | boolean, arg1: java.lang.Object)
                protected constructor(arg0: sun.security.util.ObjectIdentifier, arg1: java.lang.Boolean | boolean, arg2: java.lang.Object, arg3: java.lang.String | string)
                public getName(): string
                public encode(arg0: java.io.OutputStream): void
                protected encode(arg0: java.io.OutputStream, arg1: sun.security.util.ObjectIdentifier, arg2: boolean): void
                public set(arg0: java.lang.String | string, arg1: java.lang.Object): void
                public get(arg0: java.lang.String | string): java.util.List<sun.security.x509.DistributionPoint>
                public delete(arg0: java.lang.String | string): void
                public getElements(): java.util.Enumeration<java.lang.String>
                public toString(): string
                public get(arg0: java.lang.String | string): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}