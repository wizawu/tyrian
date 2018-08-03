declare namespace sun {
    namespace security {
        namespace x509 {
            class GeneralNames {
                public constructor(arg0: sun.security.util.DerValue)
                public constructor()
                public add(arg0: sun.security.x509.GeneralName): sun.security.x509.GeneralNames
                public get(arg0: int): sun.security.x509.GeneralName
                public isEmpty(): boolean
                public size(): int
                public iterator(): java.util.Iterator<sun.security.x509.GeneralName>
                public names(): java.util.List<sun.security.x509.GeneralName>
                public encode(arg0: sun.security.util.DerOutputStream): void
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}