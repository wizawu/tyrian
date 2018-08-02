declare namespace javax {
    namespace naming {
        namespace ldap {
            interface UnsolicitedNotification extends javax.naming.ldap.ExtendedResponse , javax.naming.ldap.HasControls {
                getReferrals(): java.lang.String[]
                getException(): javax.naming.NamingException
            }
        }
    }
}