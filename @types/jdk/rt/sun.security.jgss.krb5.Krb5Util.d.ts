declare namespace sun {
    namespace security {
        namespace jgss {
            namespace krb5 {
class Krb5Util {
    public static getTicketFromSubjectAndTgs(arg0: sun.security.jgss.GSSCaller, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.security.AccessControlContext): javax.security.auth.kerberos.KerberosTicket
    public static getSubject(arg0: sun.security.jgss.GSSCaller, arg1: java.security.AccessControlContext): javax.security.auth.Subject
    public static getServiceCreds(arg0: sun.security.jgss.GSSCaller, arg1: java.lang.String | string, arg2: java.security.AccessControlContext): sun.security.jgss.krb5.ServiceCreds
    public static credsToTicket(arg0: sun.security.krb5.Credentials): javax.security.auth.kerberos.KerberosTicket
    public static ticketToCreds(arg0: javax.security.auth.kerberos.KerberosTicket): sun.security.krb5.Credentials
    public static snapshotFromJavaxKeyTab(arg0: javax.security.auth.kerberos.KeyTab): sun.security.krb5.internal.ktab.KeyTab
    public static keysFromJavaxKeyTab(arg0: javax.security.auth.kerberos.KeyTab, arg1: sun.security.krb5.PrincipalName): sun.security.krb5.EncryptionKey[]
    public static class: java.lang.Class<any>
}

            }
        }
    }
}