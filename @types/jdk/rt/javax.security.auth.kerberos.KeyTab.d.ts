declare namespace javax {
    namespace security {
        namespace auth {
            namespace kerberos {
                class KeyTab {
                    public static getInstance(arg0: java.io.File): javax.security.auth.kerberos.KeyTab
                    public static getUnboundInstance(arg0: java.io.File): javax.security.auth.kerberos.KeyTab
                    public static getInstance(arg0: javax.security.auth.kerberos.KerberosPrincipal, arg1: java.io.File): javax.security.auth.kerberos.KeyTab
                    public static getInstance(): javax.security.auth.kerberos.KeyTab
                    public static getUnboundInstance(): javax.security.auth.kerberos.KeyTab
                    public static getInstance(arg0: javax.security.auth.kerberos.KerberosPrincipal): javax.security.auth.kerberos.KeyTab
                    public getKeys(arg0: javax.security.auth.kerberos.KerberosPrincipal): javax.security.auth.kerberos.KerberosKey[]
                    public exists(): boolean
                    public toString(): string
                    public hashCode(): int
                    public equals(arg0: java.lang.Object): boolean
                    public getPrincipal(): javax.security.auth.kerberos.KerberosPrincipal
                    public isBound(): boolean
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}