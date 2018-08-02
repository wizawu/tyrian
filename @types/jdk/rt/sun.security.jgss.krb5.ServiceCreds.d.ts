declare namespace sun {
    namespace security {
        namespace jgss {
            namespace krb5 {
                class ServiceCreds {
                    public static getInstance(arg0: javax.security.auth.Subject, arg1: java.lang.String | string): sun.security.jgss.krb5.ServiceCreds
                    public getName(): string
                    public getKKeys(): javax.security.auth.kerberos.KerberosKey[]
                    public getKKeys(arg0: javax.security.auth.kerberos.KerberosPrincipal): javax.security.auth.kerberos.KerberosKey[]
                    public getEKeys(arg0: sun.security.krb5.PrincipalName): sun.security.krb5.EncryptionKey[]
                    public getInitCred(): sun.security.krb5.Credentials
                    public destroy(): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}