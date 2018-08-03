declare namespace sun {
    namespace security {
        namespace krb5 {
            class PrincipalName implements java.lang.Cloneable {
                public static readonly KRB_NT_UNKNOWN: int
                public static readonly KRB_NT_PRINCIPAL: int
                public static readonly KRB_NT_SRV_INST: int
                public static readonly KRB_NT_SRV_HST: int
                public static readonly KRB_NT_SRV_XHST: int
                public static readonly KRB_NT_UID: int
                public static readonly TGS_DEFAULT_SRV_NAME: string
                public static readonly TGS_DEFAULT_NT: int
                public static readonly NAME_COMPONENT_SEPARATOR: char
                public static readonly NAME_REALM_SEPARATOR: char
                public static readonly REALM_COMPONENT_SEPARATOR: char
                public static readonly NAME_COMPONENT_SEPARATOR_STR: string
                public static readonly NAME_REALM_SEPARATOR_STR: string
                public static readonly REALM_COMPONENT_SEPARATOR_STR: string
                public constructor(arg0: int, arg1: java.lang.String[], arg2: sun.security.krb5.Realm)
                public constructor(arg0: java.lang.String[], arg1: java.lang.String | string)
                public clone(): java.lang.Object
                public equals(arg0: java.lang.Object): boolean
                public constructor(arg0: sun.security.util.DerValue, arg1: sun.security.krb5.Realm)
                public static parse(arg0: sun.security.util.DerInputStream, arg1: byte, arg2: boolean, arg3: sun.security.krb5.Realm): sun.security.krb5.PrincipalName
                public constructor(arg0: java.lang.String | string, arg1: int, arg2: java.lang.String | string)
                public constructor(arg0: java.lang.String | string, arg1: int)
                public constructor(arg0: java.lang.String | string)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
                public static tgsService(arg0: java.lang.String | string, arg1: java.lang.String | string): sun.security.krb5.PrincipalName
                public getRealmAsString(): string
                public getPrincipalNameAsString(): string
                public hashCode(): int
                public getName(): string
                public getNameType(): int
                public getNameStrings(): java.lang.String[]
                public toByteArray(): byte[][]
                public getRealmString(): string
                public getRealm(): sun.security.krb5.Realm
                public getSalt(): string
                public toString(): string
                public getNameString(): string
                public asn1Encode(): byte[]
                public match(arg0: sun.security.krb5.PrincipalName): boolean
                public writePrincipal(arg0: sun.security.krb5.internal.ccache.CCacheOutputStream): void
                public getInstanceComponent(): string
                public isRealmDeduced(): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}