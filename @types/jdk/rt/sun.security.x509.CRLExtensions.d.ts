declare namespace sun {
    namespace security {
        namespace x509 {
            class CRLExtensions {
                public constructor()
                public constructor(arg0: sun.security.util.DerInputStream)
                public encode(arg0: java.io.OutputStream, arg1: boolean): void
                public get(arg0: java.lang.String | string): sun.security.x509.Extension
                public set(arg0: java.lang.String | string, arg1: java.lang.Object): void
                public delete(arg0: java.lang.String | string): void
                public getElements(): java.util.Enumeration<sun.security.x509.Extension>
                public getAllExtensions(): java.util.Collection<sun.security.x509.Extension>
                public hasUnsupportedCriticalExtension(): boolean
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}