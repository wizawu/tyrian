declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
class KDCOptions extends sun.security.krb5.internal.util.KerberosFlags {
    public static RESERVED: int
    public static FORWARDABLE: int
    public static FORWARDED: int
    public static PROXIABLE: int
    public static PROXY: int
    public static ALLOW_POSTDATE: int
    public static POSTDATED: int
    public static UNUSED7: int
    public static RENEWABLE: int
    public static UNUSED9: int
    public static UNUSED10: int
    public static UNUSED11: int
    public static CNAME_IN_ADDL_TKT: int
    public static RENEWABLE_OK: int
    public static ENC_TKT_IN_SKEY: int
    public static RENEW: int
    public static VALIDATE: int
    public static with(...arg0: int[]): sun.security.krb5.internal.KDCOptions
    public constructor()
    public constructor(arg0: int, arg1: byte[])
    public constructor(arg0: boolean[])
    public constructor(arg0: sun.security.util.DerValue)
    public constructor(arg0: byte[])
    public static parse(arg0: sun.security.util.DerInputStream, arg1: byte, arg2: boolean): sun.security.krb5.internal.KDCOptions
    public set(arg0: int, arg1: boolean): void
    public get(arg0: int): boolean
    public toString(): string
    public static class: java.lang.Class<any>
}

            }
        }
    }
}