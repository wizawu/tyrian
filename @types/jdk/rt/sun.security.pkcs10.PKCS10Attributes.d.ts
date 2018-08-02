declare namespace sun {
    namespace security {
        namespace pkcs10 {
            class PKCS10Attributes implements sun.security.util.DerEncoder {
                public constructor()
                public constructor(arg0: sun.security.pkcs10.PKCS10Attribute[])
                public constructor(arg0: sun.security.util.DerInputStream)
                public encode(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                public derEncode(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                public setAttribute(arg0: java.lang.String | string, arg1: java.lang.Object): void
                public getAttribute(arg0: java.lang.String | string): java.lang.Object
                public deleteAttribute(arg0: java.lang.String | string): void
                public getElements(): java.util.Enumeration<sun.security.pkcs10.PKCS10Attribute>
                public getAttributes(): java.util.Collection<sun.security.pkcs10.PKCS10Attribute>
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public toString(): string
                public static class: java.lang.Class<any>
            }
            class PKCS10Attributes$$Lambda implements sun.security.util.DerEncoder {
                public constructor()
            }
        }
    }
}