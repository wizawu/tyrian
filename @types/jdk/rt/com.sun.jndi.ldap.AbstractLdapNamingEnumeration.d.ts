declare namespace com {
    namespace sun {
        namespace jndi {
            namespace ldap {
abstract class AbstractLdapNamingEnumeration<T extends javax.naming.NameClassPair> implements javax.naming.NamingEnumeration<T> , com.sun.jndi.ldap.ReferralEnumeration<T> {
    protected listArg: javax.naming.Name
    protected homeCtx: com.sun.jndi.ldap.LdapCtx
    public nextElement(): T
    public hasMoreElements(): boolean
    public hasMore(): boolean
    public next(): T
    protected getAtom(arg0: java.lang.String | string): string
    protected createItem(arg0: java.lang.String | string, arg1: javax.naming.directory.Attributes, arg2: java.util.Vector<javax.naming.ldap.Control>): T
    public appendUnprocessedReferrals(arg0: com.sun.jndi.ldap.LdapReferralException): void
    protected getReferredResults(arg0: com.sun.jndi.ldap.LdapReferralContext): com.sun.jndi.ldap.AbstractLdapNamingEnumeration<javax.naming.NameClassPair>
    protected hasMoreReferrals(): boolean
    protected update(arg0: com.sun.jndi.ldap.AbstractLdapNamingEnumeration<javax.naming.NameClassPair>): void
    protected finalize(): void
    protected cleanup(): void
    public close(): void
    public next(): java.lang.Object
    public nextElement(): java.lang.Object
    public static class: java.lang.Class<any>
}

            }
        }
    }
}