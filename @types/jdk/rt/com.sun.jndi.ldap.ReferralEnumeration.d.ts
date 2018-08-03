declare namespace com {
    namespace sun {
        namespace jndi {
            namespace ldap {
                interface ReferralEnumeration<T> extends javax.naming.NamingEnumeration<T> {
                    appendUnprocessedReferrals(arg0: com.sun.jndi.ldap.LdapReferralException): void
                }
                interface ReferralEnumeration$$Lambda<T> extends javax.naming.NamingEnumeration<T> {
                    (arg0: com.sun.jndi.ldap.LdapReferralException): void
                }
            }
        }
    }
}