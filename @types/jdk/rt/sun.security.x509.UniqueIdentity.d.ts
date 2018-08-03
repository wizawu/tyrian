declare namespace sun {
    namespace security {
        namespace x509 {
            class UniqueIdentity {
                public constructor(arg0: sun.security.util.BitArray)
                public constructor(arg0: byte[])
                public constructor(arg0: sun.security.util.DerInputStream)
                public constructor(arg0: sun.security.util.DerValue)
                public toString(): string
                public encode(arg0: sun.security.util.DerOutputStream, arg1: byte): void
                public getId(): boolean[]
                public static class: java.lang.Class<any>
            }
        }
    }
}