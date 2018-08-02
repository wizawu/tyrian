declare namespace com {
    namespace sun {
        namespace jndi {
            namespace ldap {
                class LdapSearchEnumeration extends com.sun.jndi.ldap.AbstractLdapNamingEnumeration<javax.naming.directory.SearchResult> {
                    protected createItem(arg0: java.lang.String | string, arg1: javax.naming.directory.Attributes, arg2: java.util.Vector<javax.naming.ldap.Control>): javax.naming.directory.SearchResult
                    public appendUnprocessedReferrals(arg0: com.sun.jndi.ldap.LdapReferralException): void
                    protected getReferredResults(arg0: com.sun.jndi.ldap.LdapReferralContext): com.sun.jndi.ldap.AbstractLdapNamingEnumeration<javax.naming.NameClassPair>
                    protected update(arg0: com.sun.jndi.ldap.AbstractLdapNamingEnumeration<javax.naming.NameClassPair>): void
                    protected createItem(arg0: java.lang.String | string, arg1: javax.naming.directory.Attributes, arg2: java.util.Vector): javax.naming.NameClassPair
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}