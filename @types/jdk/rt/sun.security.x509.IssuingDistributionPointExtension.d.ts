declare namespace sun {
    namespace security {
        namespace x509 {
            class IssuingDistributionPointExtension extends sun.security.x509.Extension implements sun.security.x509.CertAttrSet<java.lang.String> {
                public static readonly IDENT: string
                public static readonly NAME: string
                public static readonly POINT: string
                public static readonly REASONS: string
                public static readonly ONLY_USER_CERTS: string
                public static readonly ONLY_CA_CERTS: string
                public static readonly ONLY_ATTRIBUTE_CERTS: string
                public static readonly INDIRECT_CRL: string
                public constructor(arg0: sun.security.x509.DistributionPointName, arg1: sun.security.x509.ReasonFlags, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean)
                public constructor(arg0: java.lang.Boolean | boolean, arg1: java.lang.Object)
                public getName(): string
                public encode(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                public set(arg0: java.lang.String | string, arg1: java.lang.Object): void
                public get(arg0: java.lang.String | string): java.lang.Object
                public delete(arg0: java.lang.String | string): void
                public getElements(): java.util.Enumeration<java.lang.String>
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}