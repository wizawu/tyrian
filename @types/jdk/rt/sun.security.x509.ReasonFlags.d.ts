declare namespace sun {
    namespace security {
        namespace x509 {
            class ReasonFlags {
                public static readonly UNUSED: string
                public static readonly KEY_COMPROMISE: string
                public static readonly CA_COMPROMISE: string
                public static readonly AFFILIATION_CHANGED: string
                public static readonly SUPERSEDED: string
                public static readonly CESSATION_OF_OPERATION: string
                public static readonly CERTIFICATE_HOLD: string
                public static readonly PRIVILEGE_WITHDRAWN: string
                public static readonly AA_COMPROMISE: string
                public constructor(arg0: byte[])
                public constructor(arg0: boolean[])
                public constructor(arg0: sun.security.util.BitArray)
                public constructor(arg0: sun.security.util.DerInputStream)
                public constructor(arg0: sun.security.util.DerValue)
                public getFlags(): boolean[]
                public set(arg0: java.lang.String | string, arg1: java.lang.Object): void
                public get(arg0: java.lang.String | string): java.lang.Object
                public delete(arg0: java.lang.String | string): void
                public toString(): string
                public encode(arg0: sun.security.util.DerOutputStream): void
                public getElements(): java.util.Enumeration<java.lang.String>
                public static class: java.lang.Class<any>
            }
        }
    }
}