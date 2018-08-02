declare namespace javax {
    namespace security {
        namespace auth {
            namespace kerberos {
                class KerberosPrincipal implements java.security.Principal , java.io.Serializable {
                    public static KRB_NT_UNKNOWN: int
                    public static KRB_NT_PRINCIPAL: int
                    public static KRB_NT_SRV_INST: int
                    public static KRB_NT_SRV_HST: int
                    public static KRB_NT_SRV_XHST: int
                    public static KRB_NT_UID: int
                    public constructor(arg0: java.lang.String | string)
                    public constructor(arg0: java.lang.String | string, arg1: int)
                    public getRealm(): string
                    public hashCode(): int
                    public equals(arg0: java.lang.Object): boolean
                    public getName(): string
                    public getNameType(): int
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}