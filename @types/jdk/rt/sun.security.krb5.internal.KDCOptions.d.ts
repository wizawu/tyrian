declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
                class KDCOptions extends sun.security.krb5.internal.util.KerberosFlags {
                    public static readonly RESERVED: int
                    public static readonly FORWARDABLE: int
                    public static readonly FORWARDED: int
                    public static readonly PROXIABLE: int
                    public static readonly PROXY: int
                    public static readonly ALLOW_POSTDATE: int
                    public static readonly POSTDATED: int
                    public static readonly UNUSED7: int
                    public static readonly RENEWABLE: int
                    public static readonly UNUSED9: int
                    public static readonly UNUSED10: int
                    public static readonly UNUSED11: int
                    public static readonly CNAME_IN_ADDL_TKT: int
                    public static readonly RENEWABLE_OK: int
                    public static readonly ENC_TKT_IN_SKEY: int
                    public static readonly RENEW: int
                    public static readonly VALIDATE: int
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