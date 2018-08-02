declare namespace sun {
    namespace security {
        namespace x509 {
            class CertificateExtensions implements sun.security.x509.CertAttrSet<sun.security.x509.Extension> {
                public static IDENT: string
                public static NAME: string
                public constructor()
                public constructor(arg0: sun.security.util.DerInputStream)
                public encode(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                public encode(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: boolean): void
                public set(arg0: java.lang.String | string, arg1: java.lang.Object): void
                public get(arg0: java.lang.String | string): sun.security.x509.Extension
                public delete(arg0: java.lang.String | string): void
                public getNameByOid(arg0: sun.security.util.ObjectIdentifier): string
                public getElements(): java.util.Enumeration<sun.security.x509.Extension>
                public getAllExtensions(): java.util.Collection<sun.security.x509.Extension>
                public getUnparseableExtensions(): java.util.Map<java.lang.String, sun.security.x509.Extension>
                public getName(): string
                public hasUnsupportedCriticalExtension(): boolean
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public toString(): string
                public get(arg0: java.lang.String | string): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}