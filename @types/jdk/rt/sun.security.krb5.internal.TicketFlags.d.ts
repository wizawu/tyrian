declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
                class TicketFlags extends sun.security.krb5.internal.util.KerberosFlags {
                    public constructor()
                    public constructor(arg0: boolean[])
                    public constructor(arg0: int, arg1: byte[])
                    public constructor(arg0: sun.security.util.DerValue)
                    public static parse(arg0: sun.security.util.DerInputStream, arg1: byte, arg2: boolean): sun.security.krb5.internal.TicketFlags
                    public clone(): java.lang.Object
                    public match(arg0: sun.security.krb5.internal.LoginOptions): boolean
                    public match(arg0: sun.security.krb5.internal.TicketFlags): boolean
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}