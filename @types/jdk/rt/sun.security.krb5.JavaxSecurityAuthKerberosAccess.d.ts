declare namespace sun {
    namespace security {
        namespace krb5 {
            interface JavaxSecurityAuthKerberosAccess {
                keyTabTakeSnapshot(arg0: javax.security.auth.kerberos.KeyTab): sun.security.krb5.internal.ktab.KeyTab
                kerberosTicketGetProxy(arg0: javax.security.auth.kerberos.KerberosTicket): javax.security.auth.kerberos.KerberosTicket
                kerberosTicketSetProxy(arg0: javax.security.auth.kerberos.KerberosTicket, arg1: javax.security.auth.kerberos.KerberosTicket): void
            }
        }
    }
}