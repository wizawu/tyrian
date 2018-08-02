declare namespace sun {
    namespace security {
        namespace x509 {
            class GeneralSubtrees implements java.lang.Cloneable {
                public constructor()
                public constructor(arg0: sun.security.util.DerValue)
                public get(arg0: int): sun.security.x509.GeneralSubtree
                public remove(arg0: int): void
                public add(arg0: sun.security.x509.GeneralSubtree): void
                public contains(arg0: sun.security.x509.GeneralSubtree): boolean
                public size(): int
                public iterator(): java.util.Iterator<sun.security.x509.GeneralSubtree>
                public trees(): java.util.List<sun.security.x509.GeneralSubtree>
                public clone(): java.lang.Object
                public toString(): string
                public encode(arg0: sun.security.util.DerOutputStream | sun.security.util.DerOutputStream$$Lambda): void
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public intersect(arg0: sun.security.x509.GeneralSubtrees): sun.security.x509.GeneralSubtrees
                public union(arg0: sun.security.x509.GeneralSubtrees): void
                public reduce(arg0: sun.security.x509.GeneralSubtrees): void
                public static class: java.lang.Class<any>
            }
        }
    }
}