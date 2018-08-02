declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
                class CredentialsUtil {
                    public constructor()
                    public static acquireS4U2selfCreds(arg0: sun.security.krb5.PrincipalName, arg1: sun.security.krb5.Credentials): sun.security.krb5.Credentials
                    public static acquireS4U2proxyCreds(arg0: java.lang.String | string, arg1: sun.security.krb5.internal.Ticket, arg2: sun.security.krb5.PrincipalName, arg3: sun.security.krb5.Credentials): sun.security.krb5.Credentials
                    public static acquireServiceCreds(arg0: java.lang.String | string, arg1: sun.security.krb5.Credentials): sun.security.krb5.Credentials
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}