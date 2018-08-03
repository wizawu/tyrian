declare namespace sun {
    namespace security {
        namespace x509 {
            class RDN {
                public constructor(arg0: java.lang.String | string)
                public constructor(arg0: java.lang.String | string, arg1: java.util.Map<java.lang.String, java.lang.String>)
                public constructor(arg0: sun.security.x509.AVA)
                public constructor(arg0: sun.security.x509.AVA[])
                public avas(): java.util.List<sun.security.x509.AVA>
                public size(): int
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public toString(): string
                public toRFC1779String(): string
                public toRFC1779String(arg0: java.util.Map<java.lang.String, java.lang.String>): string
                public toRFC2253String(): string
                public toRFC2253String(arg0: java.util.Map<java.lang.String, java.lang.String>): string
                public toRFC2253String(arg0: boolean): string
                public static class: java.lang.Class<any>
            }
        }
    }
}